
import { Link } from 'react-router-dom';
import Silk from '../components/Silk';
import SEO from '../components/SEO';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <SEO title="404 Not Found" />
      <div className="background-wrapper">
        <Silk 
            speed={5} 
            scale={1} 
            color="#7B7481" 
            noiseIntensity={1.5} 
            rotation={0} 
        />
      </div>
      <div className="content-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <Link to="/" className="home-link">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
