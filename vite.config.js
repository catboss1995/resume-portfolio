import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 如果是 React

export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    outDir: 'dist'
  }
})
