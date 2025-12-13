import Hero from "../components/Home/Hero";
import SelectedProjects from "../components/Home/SelectedProjects";
import Skillset from "../components/Home/AboutMe";
import LetsChat from "../components/Home/LetsChat";
import CircularText from "../components/Home/CircularText";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <CircularText
        text="CREATIVE TECHNOLOGIST * FULLSTACK DEVELOPER * "
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />
      <Skillset />
     
      <SelectedProjects />
      <LetsChat />
    </>
  );
}
