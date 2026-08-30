import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroCharacter from "../assets/avatar/hero-character.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-label">SOFTWARE ENGINEER</p>

          <h1 className="hero-title">
            Hi, I’m
            <span className="hero-name">Mohammed Fazil</span>
          </h1>

          <p className="hero-description">
           Software Engineer experienced in Java, Spring Boot, and microservices, building backend applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="button button-secondary">
              Contact Me
              <Mail size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/mohammed-fazil-m-3ba895194/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/Mohammed-Fazil"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a href="mailto:mothi.mhd.fazil@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-character-area">
          <div className="character-glow" />

          <img
            src={heroCharacter}
            alt="Mohammed Fazil"
            className="hero-character-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
