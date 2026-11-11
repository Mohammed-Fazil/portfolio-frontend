import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/mf-logo.png";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-mark" onClick={closeMenu} aria-label="Home">
          <img src={logo} alt="Mohammed Fazil" className="nav-mark-logo" />

          <span>
            <span className="nav-mark-name">Mohammed Fazil</span>
            <span className="nav-mark-role">Software Engineer</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="mailto:mothi.mhd.fazil@gmail.com" className="nav-action">
          Email me
          <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav
        id="nav-mobile"
        className={`nav-mobile ${menuOpen ? "nav-mobile-open" : ""}`}
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a
          href="https://github.com/Mohammed-Fazil"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mohammed-fazil-m-3ba895194/"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
