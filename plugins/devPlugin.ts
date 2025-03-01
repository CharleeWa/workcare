import { spawn } from 'node:child_process'
import type { AddressInfo } from 'node:net'
import process from 'node:process'
import type { ViteDevServer } from 'vite'
import * as esbuild from 'esbuild'

export function devPlugin() {
  return {
    name: 'dev-plugin',
    async configureServer(server: ViteDevServer) {
      esbuild.buildSync({
        entryPoints: ['./src/main/mainEntry.ts'],
        bundle: true,
        platform: 'node',
        format: 'esm',
        outfile: './dist/mainEntry.js',
        external: ['electron'],
      })

      server.httpServer.once('listening', async () => {
        const addressInfo = server.httpServer.address() as AddressInfo
        const httpAddress = `http://localhost:${addressInfo.port}`

        // Use dynamic import and await
        const { default: electron } = await import('electron')

        const electronProcess = spawn(
          electron.toString(),
          ['./dist/mainEntry.js', httpAddress],
          {
            cwd: process.cwd(),
            stdio: 'inherit',
          },
        )

        electronProcess.on('close', () => {
          server.close()
          process.exit()
        })
      })
    },
  }
}

export function getReplacer() {
  const externalModels = ['os', 'fs', 'path', 'events', 'child_process', 'crypto', 'http', 'buffer', 'url', 'better-sqlite3', 'knex']
  const result: { [key: string]: () => { find: RegExp, code: string } } = {}
  for (const item of externalModels) {
    result[item] = () => ({
      find: /^${item}$/,
      code: `const ${item} = require('${item}');export { ${item} as default }`,
    })
  }
  result.electron = () => {
    const electronModules = ['clipboard', 'ipcRenderer', 'nativeImage', 'shell', 'webFrame'].join(',')
    return {
      find: /^electron$/,
      code: `const {${electronModules}} = require('electron');export {${electronModules}}`,
    }
  }
  return result
}
