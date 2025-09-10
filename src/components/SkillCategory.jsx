import { FaCode, FaPalette, FaStar, FaRobot } from 'react-icons/fa';

const iconMap = {
FaCode: FaCode,
FaPalette: FaPalette,
FaStar: FaStar,
FaRobot: FaRobot
};

const SkillCategory = ({ title, icon, items }) => {
const IconComponent = iconMap[icon];

return (
  <div className="skill-category">
    <h4>
      <IconComponent className="skill-icon" />
      {title}
    </h4>
    <div className="skill-grid">
      {items.map((skill, index) => (
        <div key={index} className="skill-item">
          {skill}
        </div>
      ))}
    </div>
  </div>
);
};

export default SkillCategory;