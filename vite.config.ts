import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@': path.join(__dirname, "./src")
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true,
  }
})

