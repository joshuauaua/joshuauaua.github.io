import "./selectedProjects.css";
import LightRays from "./lightRays";
import ProjectCard from "./projectCard";

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
              title: "BuildBoard",
              tags: [
                "React",
                "CSS",
                "ASP.NET",
                "MySQL",
                "Tailwind",
                "Javascript",
                "C#",
              ],
              description:
                "An app for teams working on projects together, including chat functionality, Kanban Board and Project Mapping, Timeline and more. Built with a minimal RESTful API and a React frontend.",
              image: "./src/assets/buildboard.webp",
              button: {
                link: "Repo Link; https://git.chasacademy.dev/chas-challenge-2025/group-13/plan-IT.git",
                text: "View Code ↗",
              },
            }}
          />
          <ProjectCard
            project={{
              title: "Velosonics",
              tags: ["React", "Bootstrap", "Tensorflow.js", "p5.js"],
              description:
                "A machine learning model to classify audio samples. Built using Google's Teachable Machine and TensorFlow.js with a React frontend and p5.js for audio visualization.",
              image: "./src/assets/velosonics.webp",
              button: {
                link: "https://github.com/joshuauaua/TeachableMachine_React_Audio",
                text: "View Code ↗",
              },
            }}
          />
          <ProjectCard
            project={{
              title: "Sonic Assembly",
              tags: ["Wordpress", "CSS", "HTML", "JavaScript"],
              description: "Website for my creative audio studio Sonic Assembly.",
              image: "./src/assets/sonicassembly.png",
              button: {
                link: "https://www.sonicassembly.se/", 
                text: "View Website ↗",
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
    </>
  );
}
