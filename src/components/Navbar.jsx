import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        Wilson Tanjaya
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

        <a
          href="https://drive.google.com/file/d/1Gv-bYnoxMDOjRCtGUDXOl-4TqVfY2nA7/view?usp=sharing"
          className="mobile-cv-button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          Download CV
        </a>
      </div>

      <a
        href="https://drive.google.com/file/d/1Gv-bYnoxMDOjRCtGUDXOl-4TqVfY2nA7/view?usp=sharing"
        className="cv-button"
      >
        Download CV
      </a>

      <button
        className={`menu-button ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;