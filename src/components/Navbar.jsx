import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/mf-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Home"
        >
          <img src={logo} alt="Mohammed Fazil" className="navbar-brand-logo" />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Desktop navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            aria-hidden="true"
          >
            <Menu size={25} strokeWidth={1.8} />
          </span>

          <span
            className={`close-icon ${menuOpen ? "open" : ""}`}
            aria-hidden="true"
          >
            <X size={25} strokeWidth={1.8} />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
