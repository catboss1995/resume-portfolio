import React from 'react';
import { resumeData } from '../data/resumeData';

const Sidebar = () => {
return (
  <aside className="sidebar">
    <section className="sidebar-section">
      <h3>技能專長</h3>
      <div className="skills-grid">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="sidebar-section">
      <h3>語言能力</h3>
      <div className="languages">
        {resumeData.languages.map((lang, index) => (
          <div key={index} className="language-item">
            <span className="language-name">{lang.name}</span>
            <span className="language-level">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="sidebar-section">
      <h3>興趣愛好</h3>
      <div className="interests">
        {resumeData.interests.map((interest, index) => (
          <span key={index} className="interest-tag">
            {interest}
          </span>
        ))}
      </div>
    </section>
  </aside>
);
};

export default Sidebar;