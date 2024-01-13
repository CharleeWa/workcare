import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { devPlugin } from './plugins/devPlugin'
import { buildPlugin } from './plugins/buildPlugin'

export default defineConfig({
  plugins: [devPlugin(), vue()],

  build: {
    rollupOptions: {
      plugins: [buildPlugin()],
    },
  },
})
