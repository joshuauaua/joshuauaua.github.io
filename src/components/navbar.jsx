import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logowhite.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="/">
          <img src={logo} alt="Joshua Ng" className="nav-logo" />
        </a>
      </div>

      <ul className={`nav-links nav-right-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      {/* Hamburger Button */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
