import React, { useEffect, useState } from 'react';
import { 
User, Mail, Phone, MapPin, Calendar, Palette, Code, Briefcase, 
Star, Zap, ExternalLink, Globe, Github, Figma, Image, Brush, GraduationCap
} from 'lucide-react';
import './styles/Resume.scss';

// 引入頭貼圖片
import profileImage from './assets/profile.jpg';

const Resume = () => {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(true);
  }, 100);
  return () => clearTimeout(timer);
}, []);

const portfolioLinks = [
  {
    name: 'DeviantArt 作品集',
    url: 'https://www.deviantart.com/',
    icon: <Image size={16} />,
    description: 'Furry 插畫作品',
    color: '#05cc47'
  },
  {
    name: 'Artstation',
    url: 'https://www.artstation.com/',
    icon: <Brush size={16} />,
    description: '插畫作品',
    color: '#1769FF'
  },
  {
    name: 'GitHub 程式作品',
    url: 'https://github.com/catboss1995',
    icon: <Github size={16} />,
    description: '前端專案',
    color: '#333'
  },
  {
    name: '個人網站',
    url: '#',
    icon: <Globe size={16} />,
    description: '完整作品集',
    color: '#667eea'
  },
  {
    name: 'Figma 設計稿',
    url: 'https://www.figma.com/@catboss1995',
    icon: <Figma size={16} />,
    description: 'UI/UX 設計',
    color: '#F24E1E'
  }
];

return (
  <div className={`resume-container ${isVisible ? 'fade-in' : ''}`}>
    {/* Header */}
    <div className="header">
      <div className="profile-section">
        <div className="profile-img">
          <img 
            src={profileImage} 
            alt="連璽臻" 
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <User style={{ display: 'none' }} />
        </div>
        <h1 className="name">連璽臻</h1>
        <p className="title">前端工程師 / UIUX設計 / 插畫的魔法師</p>
        <div className="contact-info">
          <div className="contact-item">
            <Mail size={16} />
            <span>catboss1995@aol.com</span>
          </div>
          <div className="contact-item">
            <Phone size={16} />
            <span>0979-419-226</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>台北市士林區</span>
          </div>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <div className="main-content">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Personal Info */}
        <div className="section">
          <h3 className="section-title">個人資料</h3>
          <div className="personal-info">
            <div className="info-item">
              <span className="info-label">
                <Calendar className="info-icon" />
                學歷
              </span>
              <span className="info-value birth-year">育達科技大學<br />多媒體與遊戲設計系</span>
            </div>
            <div className="info-item">
              <span className="info-label">
                <MapPin className="info-icon" />
                居住地
              </span>
              <span className="info-value">台北市士林區</span>
            </div>
            <div className="info-item">
              <span className="info-label">
                <Briefcase className="info-icon" />
                正在進行
              </span>
              <span className="info-value">打怪練級中<br />朝著全端前進</span>
            </div>
          </div>
        </div>

        {/* Portfolio Links */}
        <div className="section">
          <h3 className="section-title">作品連結</h3>
          <div className="portfolio-links">
            {portfolioLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="portfolio-link"
                style={{'--link-color': link.color}}
              >
                <div className="link-icon" style={{color: link.color}}>
                  {link.icon}
                </div>
                <div className="link-content">
                  <div className="link-name">{link.name}</div>
                  <div className="link-description">{link.description}</div>
                </div>
                <ExternalLink size={14} className="external-icon" />
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="section">
          <h3 className="section-title">專業技能</h3>
          
          <div className="skill-category">
            <h4>
              <Palette className="category-icon" />
              設計技能
            </h4>
            <div className="skill-grid">
              <span className="skill-item">Adobe Photoshop</span>
              <span className="skill-item">Adobe Illustrator</span>
              <span className="skill-item">Adobe After Effects</span>
              <span className="skill-item">Adobe Premier</span>
              <span className="skill-item">Figma</span>
              <span className="skill-item">Sketch Up</span>
              <span className="skill-item">CLIP STUDIO PAINT</span>
              <span className="skill-item">插畫繪製</span>
              <span className="skill-item">產品包裝設計</span>
              <span className="skill-item">品牌設計</span>
              <span className="skill-item">UI/UX 設計</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>
              <Code className="category-icon" />
              前端技能
            </h4>
            <div className="skill-grid">
              <span className="skill-item">HTML5</span>
              <span className="skill-item">CSS3</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Vue.js</span>
              <span className="skill-item">SCSS</span>
              <span className="skill-item">Bootstrap</span>
              <span className="skill-item">RWD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        {/* Experience */}
        <div className="section">
          <h2 className="section-title">經歷</h2>
          
          {/* 職業訓練 */}
          <div className="experience-item">
            <div className="job-header">
              <div>
                <h3 className="job-title">前端網頁設計職業訓練</h3>
                <p className="company">產業新尖兵計畫</p>
              </div>
              <span className="job-period">2025/07 - 2025/10</span>
            </div>
            <p className="job-description">
              專精前端開發技術，學習現代網頁開發框架與工具
            </p>
            <ul className="highlights">
              <li>HTML5、CSS3、JavaScript 深度學習</li>
              <li>響應式網頁設計實作</li>
              <li>前端框架與工具鏈應用</li>
              <li>結合 AI 輔助工具優化開發流程</li>
            </ul>
          </div>

          {/* 視覺設計師 */}
          <div className="experience-item">
            <div className="job-header">
              <div>
                <h3 className="job-title">設計審稿與輸出</h3>
                <p className="company">印刷業</p>
              </div>
              <span className="job-period">2025/04 - 2025/06</span>
            </div>
            <p className="job-description">
              負責大型印刷品設計與品牌視覺規劃
            </p>
            <ul className="highlights">
              <li>大型印刷品設計與檔案輸出管理</li>
              <li>色彩校正與印刷品質控制</li>
              <li>客戶需求溝通與專案時程管理</li>
            </ul>
          </div>

          {/* 美編設計師 */}
          <div className="experience-item">
            <div className="job-header">
              <div>
                <h3 className="job-title">美編設計師</h3>
                <p className="company">創運國際有限公司</p>
              </div>
              <span className="job-period">2021/09 - 2021/12</span>
            </div>
            <p className="job-description">
              品牌視覺設計與多媒體內容製作
            </p>
            <ul className="highlights">
              <li>視覺設計</li>
              <li>影片剪輯與動態圖像製作</li>
              <li>品牌識別系統建立與維護</li>
            </ul>
          </div>

          {/* 自由接案設計師 */}
          <div className="experience-item">
            <div className="job-header">
              <div>
                <h3 className="job-title">自由接案設計師</h3>
                <p className="company">個人</p>
              </div>
              <span className="job-period">2020 - 至今</span>
            </div>
            <p className="job-description">
              多元設計服務與客戶關係維護
            </p>
            <ul className="highlights">
              <li>平面設計、插畫創作、品牌識別設計</li>
              <li>數位角色設計與委託創作</li>
              <li>客戶需求分析與專案管理</li>
            </ul>
          </div>

          {/* 美術兼網站設計 */}
          <div className="experience-item">
            <div className="job-header">
              <div>
                <h3 className="job-title">美術兼網站設計</h3>
                <p className="company">尊榮旅行社有限公司</p>
              </div>
              <span className="job-period">2016/07 - 2018/07</span>
            </div>
            <p className="job-description">
              網站美編設計與 SEO 優化管理
            </p>
            <ul className="highlights">
              <li>旅遊網站視覺設計與維護</li>
              <li>SEO 優化策略執行，提升網站流量</li>
              <li>HTML/CSS 基礎網站管理</li>
            </ul>
          </div>
        </div>

        {/* Highlight Sections */}
        <div className="highlight">
          <h4>
            <Star className="highlight-icon" />
            設計專長亮點
          </h4>
          <p>
            從小學習繪畫至今，擁有深厚的美術基礎和敏銳的色彩感知。特別擅長角色設計和情境插畫，
            能夠快速理解客戶需求並轉化為視覺作品。作品風格多元，從可愛療癒到專業商用都能駕馭。
            深受梵谷與透納等印象派大師啟發，期望透過藝術創作傳達情感與美感。
          </p>
        </div>

        <div className="ai-highlight">
          <h4>
            <Zap className="highlight-icon" />
            轉職決心與目標
          </h4>
          <p>
            目前正參加政府產業新尖兵職訓課程學習前端開發，預計 10 月結訓。
            希望結合豐富的設計背景與新習得的程式技能，成為具備視覺美感的前端工程師。
            期待在穩定的工作環境中發揮創意，同時持續精進技術能力，為團隊帶來設計思維的價值。
          </p>
        </div>
      </div>
    </div>
  </div>
);
};

export default Resume;