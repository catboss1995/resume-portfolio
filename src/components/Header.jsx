import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Header = () => {
return (
  <header className="header">
    <div className="header-content">
      <div className="profile-section">
        <div className="profile-image">
          <img src="/images/profile.jpg" alt="連璽臻" />
        </div>
        <div className="profile-info">
          <h1 className="name">連璽臻</h1>
          <h2 className="title">前端開發者 & 視覺設計師</h2>
          <p className="description">
            熱愛藝術創作的前端開發者，擅長將美學與技術結合，創造優美的使用者體驗
          </p>
        </div>
      </div>
      
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope />
          <span>lhc0626@aol.com</span>
        </div>
        <div className="contact-item">
          <FaPhone />
          <span>+886 979-419-226</span>
        </div>
        <div className="contact-item">
          <FaGithub />
          <span>github.com/catboss1995</span>
        </div>
        <div className="contact-item">
          <FaLinkedin />
          <span>linkedin.com/in/catboss1995</span>
        </div>
      </div>
    </div>
  </header>
);
};

export default Header;