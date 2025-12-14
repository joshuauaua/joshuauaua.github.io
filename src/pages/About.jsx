import Silk from "../components/Home/Silk.jsx";
import './About.css';
import joshua from '/src/assets/joshua.png';
import { useEffect } from "react"; 
import CV from "/src/assets/JoshuaNg_CV.pdf";


  
<Silk speed={5} scale={1} color="#7B7481" noiseIntensity={2} rotation={0} />;

export default function MainAbout() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <div className="about">
        <div className="about-background">
        </div>

        <div className="about-content">
          <img src={joshua} className="about-img" />

          <div>
            <p className="about-text">
              Like many before me, my path into programming hasn’t been a
              straight line. For nearly a decade, I worked in the creative
              industries as a project leader and producer, where I explored the
              intersection of art, culture, and technology. Along the way, I
              helped build a <a href="https://www.theguardian.com/cities/2015/mar/18/future-city-halls-malmo-tallinn-communities-power" target="_blank" rel="noopener noreferrer" to="">crowdsourced living room in Malmö</a>, set up a
              <a href="https://www.7hillspark.com/alraseef153 target="_blank rel="noopener noreferrer"> makerspace and media lab in Amman</a>, and organized exhibitions
              across Europe where artists <a href="https://www.sydsvenskan.se/artikel/europeiska-konstnarer-stallde-ut-digitala-dystopier-pa-stpln/" target="_blank" rel="noopener noreferrer">speculated on life after social media.</a>
              <br></br><br></br>
              Later, I started my own <a href="https://www.sonicassembly.se/ target="_blank rel="noopener noreferrer">creative sound studio</a>, producing music and
              sound design for clients such as Google, Fujifilm Nordic, and
              independent filmmakers—on projects featuring talents like <a href="https://www.sonicassembly.se/work/google-jacob-collier" target="_blank" rel="noopener noreferrer">Jacob
              Collier</a > and <a href="https://www.sonicassembly.se/work/shankar-mahadevan-x-music-ai-live-google-lab-sessions" target="_blank" rel="noopener noreferrer">Shankar Mahadevan</a>. Around this time, I also carried
              out my <a href="https://www.sonicassembly.se/work/velosonics" target="_blank" rel="noopener noreferrer">first sonic research commission with the Goethe Institute</a>,
              developing a machine learning tool that analyzed audio files to
              detect maintenance issues in delivery bicycles. That project was a
              turning point: it showed me the power of combining digital tools
              with my creative background.
              <br></br><br></br>
              Currently, I am in the process of learning how to combine my background from the creative industries
              with my interest in building digital products and experiences. I am currently diving deep
              into .NET, React and a range of tools and technologies. But beyomnd that, I am trying to understand
              the broader shifts in emerging technologies, best practices in software engineering/architecture, 
              and keeping a positive outlook on the potential there are for these tools to shape a better world. 
            </p>
          </div>
          <a href={CV} target="_blank" rel="noopener noreferrer" className="about-btn">Check Out My CV ↗</a>

        </div>
      </div>
    </>
  );
}
