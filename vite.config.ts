import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, "env");

  return {
    root: './',
    build: {
      outDir: './output'
    },
    server: {
      port: 3000,
      proxy: {
          '/api/aws/': {
              target: env.VITE_API_URL,
              changeOrigin: true,
              rewrite: (path) => path.replace('/api/aws/', ''),
          }
      }
    },
    define: {
      "global": {},
    },
    plugins: [tsconfigPaths(),react()]
  }
})
