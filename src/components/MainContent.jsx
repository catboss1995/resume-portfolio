import React from 'react';
import { FaTarget, FaRocket, FaStar } from 'react-icons/fa';
import ExperienceItem from './ExperienceItem';
import { experiences, careerObjective, aiCompetency, personalStatement } from '../data/resumeData';
import '../styles/MainContent.scss';

const MainContent = () => {
return (
  <div className="content">
    {/* Career Objective */}
    <div className="highlight">
      <h4>
        <FaTarget className="highlight-icon" />
        {careerObjective.title}
      </h4>
      <p>{careerObjective.content}</p>
    </div>

    {/* AI Competency */}
    <div className="ai-highlight">
      <h4>
        <FaRocket className="highlight-icon" />
        {aiCompetency.title}
      </h4>
      <p>{aiCompetency.content}</p>
    </div>

    {/* Experience */}
    <div className="section">
      <h3 className="section-title">工作經歷</h3>
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>

    {/* Personal Statement */}
    <div className="section">
      <div className="highlight">
        <h4>
          <FaStar className="highlight-icon" />
          {personalStatement.title}
        </h4>
        <p>{personalStatement.content}</p>
      </div>
    </div>
  </div>
);
};

export default MainContent;