import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/OC_Projet8",
  //base: "/",
  plugins: [react()],
})
