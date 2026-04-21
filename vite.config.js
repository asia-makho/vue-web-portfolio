import { defineConfig } from 'vite'
import vue from '@vue/plugin-vue'

export default defineConfig({
  // Якщо ми робимо build (production), ставимо шлях репозиторію. 
  // Якщо просто розробляємо (development) — корінь.
  base: process.env.NODE_ENV === 'production' ? '/asia-web/' : '/',
  plugins: [vue()],
})