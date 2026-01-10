import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

import './Projects.css';

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract unique tags
  const allTags = ['All', ...new Set(projectsData.flatMap(project => project.tags || []))].sort();

  const filteredProjects = selectedTag === 'All'
    ? projectsData
    : projectsData.filter(project => project.tags && project.tags.includes(selectedTag));

  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '5rem' }}>
      <SEO
        title="Projects"
        description="Explore the creative coding projects and web applications built by Joshua Ng."
        url="/projects"
      />
      <div className="projects-page-header">
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          All Projects
        </motion.h1>

        <div className="filter-container">
          <select 
            value={selectedTag} 
            onChange={(e) => setSelectedTag(e.target.value)}
            className="filter-select"
          >
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
