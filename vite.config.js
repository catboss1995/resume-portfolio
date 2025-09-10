import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 如果是 React

export default defineConfig({
  plugins: [react()],
  base: '/resume-portfolio/', // ← 重要！你的 repo 名稱
  build: {
    outDir: 'dist'
  }
})
