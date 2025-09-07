import './aboutMe.css';  
import { Link } from 'react-router-dom';


export default function Skillset(){

  return(
    <>


    <div id="about" className="about-section">

    <div className="about-container">

    <p className="about-description">
    I’m a full-stack developer and creative technologist based in Stockholm, with a background in project management. <br /> I thrive on solving complex challenges and enjoy crafting web applications as immersive, user-driven digital experiences.  </p>
    <Link to="/about" className="about-btn">Find Out More ↗</Link>
    </div>
    </div>
    
    </>
  )
}