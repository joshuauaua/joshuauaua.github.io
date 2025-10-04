import LightRays from "./lightRays";
import ProjectCard from "./projectCard";
import restaurant from "../../assets/restaurant.png";
import buildboard from "../../assets/buildboard.png";
import velosonics from "../../assets/velosonics.png";
import "./selectedProjects.css"

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
              title: "Restaurant App",
              tags: [".NET Core WebAPI", "C#", "DI/Repo Pattern", "Minimal API with Controllers", "Entity Framework", "SQL Server",  "Swagger",],
              description: "Backend for restaurant management system, including table bookings, menu management, and order processing. Built with a .NET Core WebAPI using C# and Entity Framework for database interactions.",
              image: restaurant,
              button: {
                link: "https://github.com/joshuauaua/BirdAndBrew/tree/main/BirdAndBrew/", 
                text: "View Code ↗",
              },
            }}
          />

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
              image: buildboard,
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
