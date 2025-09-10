import { FaCalendarAlt, FaGraduationCap, FaMotorcycle, FaDollarSign } from 'react-icons/fa';
import { personalInfo } from './src/data/resumeData.js';

const PersonalInfo = () => {
return (
  <div className="section">
    <h3 className="section-title">基本資料</h3>
    <div className="personal-info">
      <div className="info-item">
        <span className="info-label">
          <FaCalendarAlt className="info-icon" />
          出生年份
        </span>
        <span className="info-value birth-year">({personalInfo.birthYear})</span>
      </div>
      <div className="info-item">
        <span className="info-label">
          <FaGraduationCap className="info-icon" />
          學歷
        </span>
        <span className="info-value">
          {personalInfo.education.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </span>
      </div>
      <div className="info-item">
        <span className="info-label">
          <FaMotorcycle className="info-icon" />
          駕照
        </span>
        <span className="info-value">{personalInfo.license}</span>
      </div>
      <div className="info-item">
        <span className="info-label">
          <FaDollarSign className="info-icon" />
          期望薪資
        </span>
        <span className="info-value">{personalInfo.expectedSalary}</span>
      </div>
    </div>
  </div>
);
};

export default PersonalInfo;