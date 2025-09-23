// 使用 ES 模組語法
import { publish } from 'gh-pages';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// 初始化環境變量
dotenv.config();

// 獲取當前文件的目錄
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 從環境變量獲取令牌
const token = process.env.GH_TOKEN;

// 如果沒有找到令牌，顯示錯誤
if (!token) {
  console.error('錯誤: 未找到 GitHub 令牌。請確保 .env 文件中有 GH_TOKEN 變量。');
  process.exit(1);
}

// 構建包含令牌的倉庫 URL
const repo = `https://${token}@github.com/catboss1995/resume-portfolio.git`;

console.log('開始部署到 GitHub Pages...');

// 執行部署
publish(
  join(process.cwd(), 'dist'),
  {
    repo: repo,
    branch: 'gh-pages',
    message: 'Auto-deploy from script',
    silent: true // 不顯示包含令牌的命令
  },
  (err) => {
    if (err) {
      console.error('部署失敗:', err);
    } else {
      console.log('成功部署到 GitHub Pages!');
      console.log('您的網站應該很快就能在 https://catboss1995.github.io/resume-portfolio/ 訪問');
    }
  }
);