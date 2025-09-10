import React from 'react';
import { resumeData } from '../data/resumeData';
import { FaCalendar, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const MainContent = () => {
return (
  <main className="main-content-area">
    <section className="section">
      <h2 className="section-title">關於我</h2>
      <p className="about-text">{resumeData.about}</p>
    </section>

    <section className="section">
      <h2 className="section-title">工作經歷</h2>
      <div className="timeline">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3 className="job-title">{exp.position}</h3>
              <h4 className="company-name">{exp.company}</h4>
              <div className="job-meta">
                <span className="job-date">
                  <FaCalendar /> {exp.period}
                </span>
                <span className="job-location">
                  <FaMapMarkerAlt /> {exp.location}
                </span>
              </div>
              <ul className="job-responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section">
      <h2 className="section-title">學歷背景</h2>
      <div className="education-list">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className="degree">{edu.degree}</h3>
            <h4 className="school">{edu.school}</h4>
            <span className="education-period">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="section">
      <h2 className="section-title">作品集</h2>
      <div className="projects-grid">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);
};

export default MainContent;