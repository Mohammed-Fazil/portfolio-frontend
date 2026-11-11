import { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const titleRef = useRef(null);
  const filterRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const filter = filterRef.current;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!title || !filter || !finePointer || reducedMotion) {
      return undefined;
    }

    const displacement = filter.querySelector("feDisplacementMap");
    const turbulence = filter.querySelector("feTurbulence");

    let scale = 0;
    let target = 0;
    let raf = null;

    const tick = () => {
      scale += (target - scale) * 0.12;

      displacement.setAttribute("scale", scale.toFixed(2));

      if (Math.abs(target - scale) > 0.2) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    };

    const schedule = () => {
      if (raf === null) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (event) => {
      const rect = title.getBoundingClientRect();

      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);

      const distance = Math.hypot(dx, dy);

      target = Math.max(0, 34 - distance / 6);

      turbulence.setAttribute(
        "baseFrequency",
        `${0.011 + target * 0.0006} ${0.02}`,
      );

      schedule();
    };

    const onLeave = () => {
      target = 0;
      schedule();
    };

    title.addEventListener("pointermove", onMove);
    title.addEventListener("pointerleave", onLeave);

    return () => {
      title.removeEventListener("pointermove", onMove);
      title.removeEventListener("pointerleave", onLeave);

      if (raf !== null) {
        cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <footer className="close" id="contact">
      <div className="wrap-narrow">
        <p className="section-kicker close-kicker">Contact</p>

        <h2 className="close-title h-display" ref={titleRef}>
          Let's build something <em>that lasts.</em>
        </h2>

        <div className="close-email">
          <a
            href="mailto:mothi.mhd.fazil@gmail.com"
            className="close-email-link"
          >
            <Mail size={17} aria-hidden="true" />
            mothi.mhd.fazil@gmail.com
          </a>
        </div>

        <p className="close-note">Find me here — replies within a day.</p>

        <div className="close-lines">
          <a
            href="https://www.linkedin.com/in/mohammed-fazil-m-3ba895194/"
            target="_blank"
            rel="noreferrer"
            className="close-line"
          >
            <span className="close-line-icon">
              <FaLinkedin size={17} aria-hidden="true" />
            </span>
            LinkedIn
            <span className="close-line-value">/in/mohammed-fazil-m-3ba895194</span>
            <span className="arrow-glyph" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            href="https://github.com/Mohammed-Fazil"
            target="_blank"
            rel="noreferrer"
            className="close-line"
          >
            <span className="close-line-icon">
              <FaGithub size={17} aria-hidden="true" />
            </span>
            GitHub
            <span className="close-line-value">@Mohammed-Fazil</span>
            <span className="arrow-glyph" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="wrap close-foot">
        <p className="close-foot-note">
          <b>Mohammed Fazil</b> — software engineer · Java &amp; Spring Boot ·{" "}
          {new Date().getFullYear()}
        </p>

        <p className="close-foot-built">
          Built with React, three.js, Geist &amp; Geist Mono
        </p>

        <nav className="close-foot-links" aria-label="Footer">
          <a
            href="https://github.com/Mohammed-Fazil"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={16} aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-fazil-m-3ba895194/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} aria-hidden="true" />
          </a>

          <a href="#home">Back to top</a>
        </nav>
      </div>

      <svg className="liquid-svg" aria-hidden="true" focusable="false" ref={filterRef}>
        <filter id="liquid-type" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011 0.02"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </footer>
  );
}

export default Contact;
