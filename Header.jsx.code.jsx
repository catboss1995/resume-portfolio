import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';
import '../styles/Header.scss';

const Header = () => {
return (
  <header className="header">
    <div className="profile-section">
      <div className="profile-img">
        <FaUser />
      </div>
      <h1 className="name">{personalInfo.name}</h1>
      <p className="title">{personalInfo.title}</p>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone />
          <span>{personalInfo.contact.phone}</span>
        </div>
        <div className="contact-item">
          <FaEnvelope />
          <span>{personalInfo.contact.email}</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <span>{personalInfo.contact.location}</span>
        </div>
      </div>
    </div>
  </header>
);
};

export default Header;