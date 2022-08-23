import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: './output'
  },
  server: {
    port: 3000
  },
  plugins: [tsconfigPaths(),react()]
})
