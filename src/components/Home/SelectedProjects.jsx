import LightRays from "./LightRays.jsx";
import ProjectCard from "./ProjectCard.jsx";
import restaurant from "../../assets/restaurant.png";
import buildboard from "../../assets/buildboard.png";
import velosonics from "../../assets/velosonics.png";
import "./SelectedProjects.css"

export default function SelectedProjects() {
  return (
    <>
      <div className="selected-projects-container" id="projects">
        <div className="selected-projects-background">
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <LightRays
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
            <LightRays
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
            <LightRays
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>

        <div className="selected-projects-content">
          <h1 className="selected-projects-title">SELECTED PROJECTS</h1>

          <ProjectCard
            project={{
              title: "Hyper Radio",
              tags: [".NET Core WebAPI", "C#", "HTTP LiveStreaming", "React", "FFMPEG", "Entity Framework", "SQL Server",  "WebAudio API",],
              description: "Web radio music streaming platform that allows users to submit mp3 files with accompanying data and tracks get placed in relevant playlists for playback in a stream.",
              image: restaurant,
              button: {
                link: "https://hyperradio.online/", 
                text: "Join Waitlist ↗",
              },
            }}
          />


          <ProjectCard
            project={{
              title: "Open Audio Streaming Kit",
              tags: [".NET Core WebAPI", "C#", "DI/Repo Pattern", "React", "Entity Framework", "SQL Server",],
              description: "Open source audio streaming kit built in C#. Allows users to build their own modular audio streaming platform while taking care of different complex backend services, such as HLS conversion, Blob storage management and persistent audio player frontend.",
              image: restaurant,
              button: {
                link: "https://github.com/joshuauaua/Open-Audio-Streaming-Kit", 
                text: "View Code ↗",
              },
            }}
          />

          <ProjectCard
            project={{
              title: "Sonic Assembly",
              tags: [
                "CSS",
                "Tailwind CSS",
                "Html",
                "Javascript",
              ],
              description:
                "I built the website for my company, Sonic Assembly. I aimed to design a 'play-fessional' experience that showcase the different projects I have worked on, but also present the company as a serious collaborator in the industry.",
              image: buildboard,
              button: {
                link: "http://sonicassembly.se/",
                text: "View Website ↗",
              },
            }}
          />
          <ProjectCard
            project={{
              title: "Velosonics",
              tags: ["React", "Bootstrap", "Tensorflow.js", "p5.js"],
              description:
                "Commissioned by the Goethe Institutte, an audio classification tool built using Google's Teachable Machine and TensorFlow.js with a React frontend and p5.js for audio visualization. Pilot project tested to detect maintenance issues in delivery bikes in Italy using audio recordings",
              image: velosonics,
              button: {
                link: "https://github.com/joshuauaua/TeachableMachine_React_Audio",
                text: "View Code ↗",
              },
            }}
          />
          
        </div>

        <a
          className="selected-projects-btn"
          href="https://github.com/joshuauaua"
          target="_blank"
        >
          View All My Projects ↗
        </a>
       
      </div>
    </>
  );
}
