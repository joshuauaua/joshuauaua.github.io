import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import projectsData from '../data/projects.json';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="container flex-center" style={{ minHeight: '80vh', flexDirection: 'column', gap: '2rem' }}>
        <h1>404 - Project Not Found</h1>
        <Link to="/projects" className="back-link">
          <ArrowLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        title={project.title} 
        description={project.description.slice(0, 160)}
        image={project.image}
        url={`/project/${project.slug}`}
      />
      <div 
        className="project-header-image" 
        style={{ background: project.headerGradient }}
      >
        <div className="header-overlay"></div>
        <div className="container header-content">
          <Link to="/projects" className="back-button">
            <ArrowLeft size={24} /> Back
          </Link>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h1>
          <div className="tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container project-content">
        <div className="project-grid">
          <div className="project-info">
            <div className="metadata-grid">
              <div className="meta-item">
                <span className="meta-label">Format</span>
                <span className="meta-value">{project.metadata.format}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Year</span>
                <span className="meta-value">{project.metadata.year}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Client</span>
                <span className="meta-value">{project.metadata.client}</span>
              </div>
              {project.metadata.collaborators && (
                <div className="meta-item">
                  <span className="meta-label">Collaborators</span>
                  <span className="meta-value">{project.metadata.collaborators}</span>
                </div>
              )}
            </div>

            <div className="project-links">
              {project.links.repo && (
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="btn-link">
                  <Github size={20} /> Repository
                </a>
              )}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-link accent">
                  <Globe size={20} /> Live Site
                </a>
              )}
            </div>
          </div>

          <div className="project-description">
            <p className="description-text">{project.description}</p>
            
            {project.video && (
              <div className="video-container">
                <iframe 
                  src={(() => {
                    const url = project.video;
                    // Handle youtube short links (youtu.be)
                    if (url.includes('youtu.be/')) {
                      const id = url.split('youtu.be/')[1].split('?')[0];
                      return `https://www.youtube.com/embed/${id}`;
                    }
                    // Handle standard youtube links
                    if (url.includes('youtube.com/watch')) {
                      const urlParams = new URLSearchParams(new URL(url).search);
                      return `https://www.youtube.com/embed/${urlParams.get('v')}`;
                    }
                    return url;
                  })()} 
                  title={project.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="project-gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {project.images.map((img, index) => (
                <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
