import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: true // <--- ESTO ES LA CLAVE: Permite conexiones desde tu red WiFi
  }
})
