import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { target: 'http://localhost:3000', changeOrigin: true },
      '/oauth': { target: 'http://localhost:3000', changeOrigin: true },
      '/callback': { target: 'http://localhost:3000', changeOrigin: true },
      '/connect-telegram': { target: 'http://localhost:3000', changeOrigin: true },
    },
  },
})
