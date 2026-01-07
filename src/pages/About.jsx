import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import './About.css';

const About = () => {
  const expertise = [
    { title: "Fullstack", skills: ["React", "TypeScript", "Node.js", ".NET Core", "PostgreSQL"] },
    { title: "Audio Tech", skills: ["FMOD", "Web Audio API", "Max/MSP", "C++", "DSP"] },
    { title: "Creative", skills: ["Three.js", "GLSL", "Arduino", "TouchDesigner", "UI/UX"] },
    { title: "DevOps", skills: ["AWS", "Azure", "Docker", "CI/CD", "Linux"] }
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
              My path into programming wasn’t a straight line. For nearly a decade, I worked in the creative industries as a project leader and producer, exploring the intersection of art, culture, and technology. From building a crowdsourced living room in Malmö to founding a creative sound studio for clients like Google and Fujifilm, I’ve always been driven by impactful experiences.
            </p>
            <p>
              A turning point came when I developed a machine learning tool to analyze audio for delivery bicycles—revealing the power of combining digital tools with my creative background.
            </p>
            <p>
              Today, I’m focused on building digital products using .NET, React, and emerging technologies, striving to create tools that shape a better world.
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
