import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './About.css';

const About = () => {
  const expertise = [
    { title: "Fullstack", skills: ["React", "TypeScript", ".NET Core", "Relational Databases", "Docker", "CI/CD", "Azure"] },
    { title: "Audio Tech", skills: ["FMOD/Wwise", "Web Audio API", "PureData", "DSP"] },
    { title: "Creative", skills: [ "P5.js", "Arduino/RPi", "Tensorflow.js", "UI/UX"] },
    { title: "Project Management", skills: ["Agile", "Scrum", "Jira", "Grant Application", "Branding", "Documentation", "Client Communication"] }
  ];

  return (
    <motion.div 
      className="about-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO 
        title="About Me" 
        description="Learn more about Joshua Ng, a multidisciplinary developer and creative technologist." 
        url="/about"
      />
      <div className="about-header">
        <h1>About Me</h1>
      </div>

    <div className="about-content">
        <div className="bio-section">
          <p className="bio-lead">
            I am a <span className="text-accent">multidisciplinary developer and project leader</span> bridging the gap between the technical and the creative.
          </p>
          <div className="bio-text">
            <p>
              I spent a decade in the creative industries as a producer and project leader, navigating the intersection of art, culture, and technology. 
              I thrive in the overlap between these worlds. From building a <a href="https://www.theguardian.com/cities/2015/mar/18/future-city-halls-malmo-tallinn-communities-power" target="_blank" rel="noopener noreferrer">crowdsourced living room</a> in Malmö to founding a <a href="https://www.sonicassembly.se/" target="_blank" rel="noopener noreferrer">creative sound studio</a> serving clients like Google and Fujifilm, I have always been driven by impactful experiences.
            </p>
            <p>
              My transition into engineering began when I developed <a href="https://creativeflip.creativehubs.net/post/velosonics" target="_blank" rel="noopener noreferrer">a tool to detect maintenance issues</a> in delivery bicycles using Machine Learning and audio analysis. That project srevealed to me the potential of combining my creative background with advanced digital tools.
            </p>
            <p>
              Today, I focus on building digital products, services and experiences using primarily .NET and React, striving to create digital solutions that solve human problems.
            </p>
          </div>
        </div>


        <div className="expertise-section">
          <h2>My Expertise</h2>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <div key={index} className="expertise-card">
                <h3>{item.title}</h3>
                <ul>
                  {item.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
