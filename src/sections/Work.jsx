import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    index: "01",
    name: "TinyURL",
    type: "URL shortening service",
    description:
      "A URL shortening service for creating short, easy-to-share links.",
    stack: ["Java", "Spring Boot", "MongoDB"],
    githubUrl: "https://github.com/Mohammed-Fazil/tinyurl",
    liveUrl: import.meta.env.VITE_TINYURL_LIVE_URL,
  },
  {
    index: "02",
    name: "DocFlow",
    type: "Collaborative document editor",
    description:
      "A collaborative document editor with real-time editing, document sharing, and role-based access control.",
    stack: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
    githubUrl: "https://github.com/Mohammed-Fazil/docflow-collaborative-editor",
    liveUrl: null,
  },
];

const roles = [
  {
    period: "Jun 2024 — Jul 2026",
    role: "Software Engineer",
    company: "Capgemini",
    note: "Two years building microservices, REST APIs and real-time features in production teams.",
  },
  {
    period: "Feb 2024 — Jun 2024",
    role: "Junior Software Engineer",
    company: "Bozhon Precision Industry Technology",
    note: "Four months on internal tooling — my first shipped code under review.",
  },
];

function Work() {
  return (
    <section className="work" id="work">
      <div className="wrap">
        <p className="section-kicker">Selected work</p>

        <h2 className="work-title h-display">Things I have shipped.</h2>

        <div className="work-list">
          {projects.map((project) => (
            <article className="work-row" key={project.index}>
              <div>
                <span className="work-index" aria-hidden="true">
                  {project.index}
                </span>

                <h3 className="work-name">{project.name}</h3>

                <p className="work-type">{project.type}</p>

                <p className="work-desc">{project.description}</p>

                <p className="work-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
              </div>

              <div className="work-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="arrow-link"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <FaGithub size={17} aria-hidden="true" />
                  <span>Source</span>
                  <span className="arrow-glyph" aria-hidden="true">
                    ↗
                  </span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="arrow-link"
                    aria-label={`View ${project.name} live`}
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    <span>Live demo</span>
                    <span className="arrow-glyph" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="work-experience" id="experience">
          <h3 className="experience-kicker">Experience</h3>

          <div className="experience-list">
            {roles.map((entry) => (
              <article className="experience-row" key={entry.period}>
                <span className="experience-period">{entry.period}</span>

                <div>
                  <p className="experience-role">{entry.role}</p>

                  <p className="experience-company">{entry.company}</p>

                  <p className="experience-note">{entry.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
