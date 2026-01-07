import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ title, category, image, slug }) => {
  return (
    <Link to={`/project/${slug}`} style={{ display: 'block' }}>
      <motion.div 
        className="project-card"
        whileHover={{ scale: 0.98 }}
      >
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
          <div className="card-overlay">
            <div className="card-icon">
              <ArrowUpRight size={32} />
            </div>
          </div>
        </div>
        <div className="card-info">
          <h3 className="card-title">{title}</h3>
          <p className="card-category">{category}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
