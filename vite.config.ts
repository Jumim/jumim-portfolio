import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 3000, open: true },
  build: { outDir: path.join(path.resolve(), 'build') },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@assets/scss/variable" as var;`
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') }
    ]
  }
})
