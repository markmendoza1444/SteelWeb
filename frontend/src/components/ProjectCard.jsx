import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.name} />
        <div className="project-overlay">
          <Link to={`/projects/${project.id}`} className="project-cta">
            View Case Study <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span className="badge">{project.category}</span>
          <span className="location">{project.location}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </motion.article>
  );
}
