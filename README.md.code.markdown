# 連璽臻 - 個人履歷網站

> 實作 React 履歷網站，展現前端設計師的專業技能與創意美學

## 線上預覽

[查看履歷網站](https://catboss1995.github.io/resume-portfolio)

## 技術

- **前端框架**：React 18
- **樣式處理**：Sass/SCSS
- **圖標庫**：React Icons
- **部署平台**：GitHub Pages
- **開發工具**：Create React App

## 安裝與運行

### 本地開發

```bash
# 克隆專案
git clone https://github.com/catboss1995/resume-portfolio.git

# 進入專案目錄
cd resume-portfolio

# 安裝依賴
npm install

# 啟動開發服務器
npm start
```

### 部署到 GitHub Pages

```bash
# 構建並部署
npm run deploy
```

## 專案結構

```
resume-portfolio/
├── public/                 # 靜態資源
├── src/
│   ├── components/         # React 組件
│   │   ├── Header.jsx     # 頭部組件
│   │   ├── Sidebar.jsx    # 側邊欄組件
│   │   ├── MainContent.jsx # 主內容組件
│   │   └── ...
│   ├── styles/            # SCSS 樣式文件
│   │   ├── App.scss       # 主樣式
│   │   ├── variables.scss # 變數定義
│   │   └── ...
│   ├── data/              # 數據文件
│   │   └── resumeData.js  # 履歷數據
│   └── App.jsx            # 主應用組件
├── package.json           # 專案配置
└── README.md             # 專案說明
```

## 設計理念
- 作業即實戰

### 視覺設計
- **色彩搭配**：採用現代漸層色彩，營造專業而有活力的視覺效果
- **版面布局**：左右分欄設計，信息層次清晰
- **互動體驗**：hover 效果與動畫轉場

### 技術實現
- **組件化**：每個功能模塊獨立封裝，便於維護
- **響應式**：使用 CSS Grid 與 Flexbox 
- **性能優化**：懶加載與動畫優化，確保流暢體驗

## 功能亮點

### 1. 智能化技能展示
- 分類清晰的技能樹
- 視覺化的技能標籤
- 突出 AI 協作能力

### 2. 動態工作經歷
- 時間軸式展示
- 詳細的工作內容描述
- 突出關鍵成就

### 3. 現代化聯絡方式
- 一鍵複製聯絡信息
- 社交媒體連結
- 專業形象展示

## 響應式設計

- **桌面端**：完整的雙欄布局，信息展示豐富
- **平板端**：優化的單欄布局，保持視覺平衡
- **手機端**：垂直堆疊設計，確保可讀性

## 自定義配置

### 修改個人信息
編輯 `src/data/resumeData.js` 文件：

```javascript
export const personalInfo = {
name: '姓名',
title: '職位',
// ... 其他信息
};
```

### 調整樣式主題
修改 `src/styles/variables.scss` 中的變數：

```scss
$primary-gradient: linear-gradient(135deg, #your-color1, #your-color2);
```

## 未來規劃

- [ ] 添加作品集展示區塊
- [ ] 整合 CMS 內容管理
- [ ] 多語言支持
- [ ] 深色模式切換
- [ ] 更多動畫效果

## 授權

本專案採用 MIT 授權條款

## 作者

**連璽臻**
- Email: lhc0626@aol.com
- Phone: 0979-419-226
- Location: 台北市士林區

---

.如果這個專案對你有幫助，請給個 Star！