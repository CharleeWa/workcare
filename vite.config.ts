import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import optimizer from 'vite-plugin-optimizer'
import { devPlugin, getReplacer } from './plugins/devPlugin'
import { buildPlugin } from './plugins/buildPlugin'

export default defineConfig({
  plugins: [optimizer(getReplacer()), devPlugin(), vue()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/renderer'),
    },
  },

  build: {
    rollupOptions: {
      plugins: [buildPlugin()],
    },
  },
})
