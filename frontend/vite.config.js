import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/clarifai-api': {
        target: 'https://api.clarifai.com', // The target API URL
        changeOrigin: true, // Ensures the host header is correctly set
        rewrite: (path) => path.replace(/^\/clarifai-api/, ''), // Optional path rewrite
      }
    }
  }
})
