import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '5rem' }}>
      <SEO
        title="Projects"
        description="Explore the creative coding projects and web applications built by Joshua Ng."
        url="/projects"
      />
      <div className="projects-header">
        <motion.h1
          style={{ fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          All Projects
        </motion.h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
        {projectsData.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
