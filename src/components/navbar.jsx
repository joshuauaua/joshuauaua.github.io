import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logowhite.png";
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <HashLink smooth to="/">
          <img src={logo} alt="Joshua Ng" className="nav-logo" />
        </HashLink>
      </div>

      <ul className={`nav-links nav-right-links ${menuOpen ? "open" : ""}`}>
        <li>
          <HashLink smooth to="/about">ABOUT</HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects">PROJECTS</HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact">CONTACT</HashLink>
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
