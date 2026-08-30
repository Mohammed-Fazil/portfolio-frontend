import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          MF
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`menu-icon ${menuOpen ? "open" : ""}`}>
            <Menu size={25} strokeWidth={1.8} />
          </span>

          <span className={`close-icon ${menuOpen ? "open" : ""}`}>
            <X size={25} strokeWidth={1.8} />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
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
