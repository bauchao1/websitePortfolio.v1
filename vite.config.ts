import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the site from /websitePortfolio.v1/, so its workflow sets BASE_PATH.
  // Vercel and Netlify serve from the root.
  base: process.env.BASE_PATH ?? '/',
})
