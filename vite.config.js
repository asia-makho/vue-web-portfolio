import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      // Цей рядок каже Vite, що @ — це шлях до папки src
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})