import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container footer-content">
        <div className="footer-cta">
          <h2>I would love to hear from you!</h2>
          <a href="mailto:joshjoelng@gmail.com" className="email-link">
            joshjoelng@gmail.com
          </a>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">Made with <span className="heart">❤️</span> in Stockholm</p>
          <div className="social-links">
            <a href="https://github.com/joshuauaua" target="_blank" rel="noopener noreferrer"><Github /></a>
            <a href="https://www.linkedin.com/in/joshuauaua/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="https://www.instagram.com/joshuauaua/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="mailto:joshjoelng@gmail.com" target="_blank" rel="noopener noreferrer"><Mail /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
