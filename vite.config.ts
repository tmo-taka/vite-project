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
    port: 3000,
    proxy: {
        '/api/weather': {
            target: 'https://weather.tsukumijima.net/api/forecast/city/200010',
            changeOrigin: true,
            rewrite: (path) => path.replace('/api/weather', ''),
        }
    }
  },
  define: {
    "global": {},
  },
  plugins: [tsconfigPaths(),react()]
})
