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
            I am a <span className="text-accent">multidisciplinary developer</span> bridging the gap between creative vision and technical engineering.
          </p>
          <div className="bio-text">
            <p>
              My path into programming wasn’t a straight line. For nearly a decade, I worked in the creative industries as a project leader and producer, exploring the intersection of art, culture, and technology. 
              From building a <a href="https://www.theguardian.com/cities/2015/mar/18/future-city-halls-malmo-tallinn-communities-power" target="_blank" rel="noopener noreferrer">crowdsourced living room</a> in Malmö to founding a <a href="https://www.sonicassembly.se/" target="_blank" rel="noopener noreferrer">creative sound studio</a> delivering projects for clients like Google, Fujifilm and more, I’ve always been driven by impactful experiences.
            </p>
            <p>
              A turning point in my journey came when I developed <a href="https://creativeflip.creativehubs.net/post/velosonics" target="_blank" rel="noopener noreferrer">a tool to detect maintenance issues</a> in delivery bicycles utilising Machine Learning and audio analysis. This revealed to me the power of combining digital tools with my creative background.
            </p>
            <p>
              Today, I’m focused on building projects using .NET, React, and other emerging technologies, striving to create tools that shape a better world.
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
