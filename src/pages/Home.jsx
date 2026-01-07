import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ShinyText from '../components/ShinyText';
import HoverModal from '../components/HoverModal';
import projectsData from '../data/projects.json';
import './Home.css';

const Home = () => {
  // Filter for selected projects
  const selectedProjects = projectsData.filter(p => p.selected);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSectionRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      return (prev + 1) % selectedProjects.length;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      return (prev - 1 + selectedProjects.length) % selectedProjects.length;
    });
  };

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="home-page">
      <section className="hero-section container">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello! <br />
            My name is <span className="text-white">Joshua Ng</span>.
            <br />
            I find <ShinyText text="digital solutions" disabled={false} speed={2} className="custom-class" /> to <ShinyText text="human problems" disabled={false} speed={1.5} className="custom-class" />.
          </motion.h1>
          
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={scrollToNextSection}
            style={{ cursor: 'pointer' }}
          >
            <ArrowDown className="bounce" size={32} color="var(--accent)" />
          </motion.div>
        </div>
      </section>

      <motion.section 
        ref={nextSectionRef}
        className="about-teaser-section container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-teaser-text">
          <p>
            I am a <HoverModal text="Creative Technologist" description="Merging coding mastery with artistic vision to build immersive digital experiences." className="highlight" /> and <HoverModal text="Fullstack Engineer" description="Architecting robust, scalable web solutions from database to frontend." className="highlight" />.
            With a background in the creative industries as a <HoverModal text="project manager" description="Leading diverse teams to deliver complex creative projects on time and within budget." />, I bring a unique perspective to problem solving.
          </p>
        </div>
      </motion.section>

      <section className="selected-projects-section">
        <div className="container" style={{ overflow: 'visible' }}>
          <div className="section-header">
            <h2 className="section-title">Selected Works</h2>
            <div className="carousel-nav">
              <button onClick={prevSlide} className="nav-btn" aria-label="Previous project">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="nav-btn" aria-label="Next project">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="carousel-viewport">
            <motion.div 
              className="carousel-track"
              animate={{ x: `-${currentIndex * (window.innerWidth < 768 ? 100 : 50)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {selectedProjects.map(project => (
                <div key={project.id} className="carousel-item">
                  <ProjectCard {...project} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
