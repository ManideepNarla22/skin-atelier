import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Vite plugin to generate 404.html and static route entry points for GitHub Pages
function githubPagesSpa() {
  return {
    name: 'github-pages-spa',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexHtml = path.join(distDir, 'index.html')
      if (!fs.existsSync(indexHtml)) return

      const content = fs.readFileSync(indexHtml, 'utf8')

      // 1. Create 404.html for GitHub Pages fallback
      fs.writeFileSync(path.join(distDir, '404.html'), content)

      // 2. Create sub-route index.html files so direct loads return HTTP 200 immediately
      const routes = [
        'about',
        'services',
        'services/skin',
        'services/aesthetics',
        'services/hair',
        'contact',
      ]

      for (const route of routes) {
        const routeDir = path.join(distDir, route)
        fs.mkdirSync(routeDir, { recursive: true })
        fs.writeFileSync(path.join(routeDir, 'index.html'), content)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), githubPagesSpa()],
  base: '/skin-atelier/',
})

