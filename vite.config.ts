import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    target: "esnext",
    minify: false,
    modulePreload: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@tests': fileURLToPath(new URL('./src/app/shared/tests', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/global.scss';`,
      },
    },
  },
})
