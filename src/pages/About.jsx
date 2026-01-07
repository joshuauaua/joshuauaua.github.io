import { motion } from 'framer-motion';
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
              My journey began in the creative industries, working with global brands like Google and Fujifilm. I discovered a passion for the systems under the hood—the code that powers experiences.
            </p>
            <p>
              Today, I specialize in building robust fullstack applications with a focus on audio and visual interactivity. Whether it's a web-based synthesiser or an enterprise management system, I bring the same level of polish and performance.
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
