import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project pages, set base to '/your-repo-name/'
// For GitHub user pages (username.github.io), set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/',
})
