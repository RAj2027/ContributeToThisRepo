import { defineConfig } from 'vite'
import path from 'path'

// Use the config file's directory as the Vite root so builds work
// regardless of the current working directory when npm scripts run.
export default defineConfig({
  root: path.resolve(__dirname, '.'),
  base: './',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
})
