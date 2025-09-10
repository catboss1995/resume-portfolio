import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import PersonalInfo from './PersonalInfo';
import SkillCategory from './SkillCategory';
import { skills, certificates } from '../data/resumeData';
import '../styles/Sidebar.scss';

const Sidebar = () => {
return (
  <div className="sidebar">
    {/* Personal Info */}
    <PersonalInfo />

    {/* Skills */}
    <div className="section">
      <h3 className="section-title">專業技能</h3>
      {Object.values(skills).map((skillCategory, index) => (
        <SkillCategory
          key={index}
          title={skillCategory.title}
          icon={skillCategory.icon}
          items={skillCategory.items}
        />
      ))}
    </div>

    {/* Certificates */}
    <div className="section">
      <h3 className="section-title">
        <FaCertificate className="section-icon" />
        專業證照
      </h3>
      <ul className="certificate-list">
        {certificates.map((cert, index) => (
          <li key={index} className="certificate-item">
            {cert}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};

export default Sidebar;