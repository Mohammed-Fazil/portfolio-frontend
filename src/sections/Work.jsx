import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    index: "01",
    name: "TinyURL",
    type: "URL shortening service",
    description:
      "A URL shortening service with Base62-encoded short codes, JWT-based authentication and centralized exception handling.",
    stack: ["Java", "Spring Boot", "Spring Security", "MongoDB"],
    githubUrl: "https://github.com/Mohammed-Fazil/tinyurl",
    liveUrl: import.meta.env.VITE_TINYURL_LIVE_URL || "https://tinyurl-iota-ruby.vercel.app/",
  },
  {
    index: "02",
    name: "DocFlow",
    type: "Real-time collaborative document editor",
    description:
      "A Google-Docs-style collaborative editor built as microservices — API gateway, Eureka service discovery, and role-based document sharing.",
    stack: ["Java", "Spring Boot", "React.js", "PostgreSQL"],
    githubUrl: "https://github.com/Mohammed-Fazil/docflow-collaborative-editor",
    liveUrl: null,
  },
];

const roles = [
  {
    period: "Jun 2024 — Jul 2026",
    role: "Software Engineer",
    company: "Capgemini",
    note: "Migrated COBOL and RPG modules to Java on Spring Boot microservices — and built an Agentic-AI code transformation engine (LangGraph, RAG) that cut manual conversion effort by ~90%.",
  },
  {
    period: "Feb 2024 — Jun 2024",
    role: "Junior Software Engineer",
    company: "Bozhon Precision Industry Technology",
    note: "Shipped client-driven features, defect fixes and production support across industrial automation modules.",
  },
  {
    period: "2018 — 2022",
    role: "B.E. Computer Science & Engineering",
    company: "C. Abdul Hakeem College of Engineering and Technology",
    note: "Graduated 2022 — CGPA 8.01 / 10.",
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
