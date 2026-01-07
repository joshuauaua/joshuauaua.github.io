import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '5rem' }}>
      <motion.h1 
        style={{ fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        All Projects
      </motion.h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
        {projectsData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
