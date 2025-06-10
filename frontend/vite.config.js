import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://rabbit-y01a.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
