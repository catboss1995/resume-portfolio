import React from 'react';
import { FaBuilding, FaCalendarAlt, FaChevronRight } from 'react-icons/fa';

const ExperienceItem = ({ experience }) => {
return (
  <div className="experience-item">
    <div className="job-header">
      <div className="job-info">
        <div className="job-title">{experience.title}</div>
        <div className="company">
          <FaBuilding className="company-icon" />
          {experience.company}
        </div>
      </div>
      <div className="job-period">
        <FaCalendarAlt className="period-icon" />
        {experience.period}
      </div>
    </div>
    <div className="job-description">{experience.description}</div>
    <ul className="highlights">
      {experience.highlights.map((highlight, index) => (
        <li key={index}>
          <FaChevronRight className="highlight-icon" />
          {highlight}
        </li>
      ))}
    </ul>
  </div>
);
};

export default ExperienceItem;