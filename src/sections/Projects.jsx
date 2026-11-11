import ProjectCard from "../components/ProjectCard";

function Projects() {
  const tinyUrlLiveUrl = import.meta.env.VITE_TINYURL_LIVE_URL;

  const projects = [
    {
      number: "01",
      title: "TinyURL",
      type: "URL Shortening Service",
      description:
        "A URL shortening service for creating short, easy-to-share links.",
      technologies: ["Java", "Spring Boot", "MongoDB"],
      githubUrl: "https://github.com/Mohammed-Fazil/tinyurl",
      liveUrl: tinyUrlLiveUrl,
      visual: {
        file: "ShortUrlController.java",
        lines: [
          [{ s: "@PostMapping" , k: "anno" }, { s: '("' , k: "pl" }, { s: "/shorten" , k: "str" }, { s: '")' , k: "pl" }],
          [
            { s: "public ", k: "kw" },
            { s: "ShortUrl", k: "type" },
            { s: " create(", k: "pl" },
            { s: "@RequestBody", k: "anno" },
            { s: " UrlRequest req) {" , k: "pl" },
          ],
          [
            { s: "    String ", k: "kw" },
            { s: "code", k: "pl" },
            { s: " = ", k: "pl" },
            { s: "Base62", k: "type" },
            { s: ".encode(counter.next());" , k: "pl" },
          ],
          [
            { s: "    return ", k: "kw" },
            { s: "repository", k: "pl" },
            { s: ".save(", k: "pl" },
            { s: "new ", k: "kw" },
            { s: "ShortUrl", k: "type" },
            { s: "(code, req.url());" , k: "pl" },
          ],
          [{ s: "}" , k: "pl" }],
        ],
      },
    },
    {
      number: "02",
      title: "DocFlow",
      type: "Collaborative Document Editor",
      description:
        "A collaborative document editor with real-time editing, document sharing, and role-based access control.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
      githubUrl: "https://github.com/Mohammed-Fazil/docflow-collaborative-editor",
      visual: {
        file: "DocEditHandler.java",
        lines: [
          [{ s: "@MessageMapping" , k: "anno" }, { s: '("' , k: "pl" }, { s: "/doc/{id}/edit" , k: "str" }, { s: '")' , k: "pl" }],
          [
            { s: "public ", k: "kw" },
            { s: "void", k: "kw" },
            { s: " onEdit(", k: "pl" },
            { s: "EditEvent", k: "type" },
            { s: " event) {" , k: "pl" },
          ],
          [
            { s: "    docService", k: "pl" },
            { s: ".apply", k: "pl" },
            { s: "(event.docId(), event.patch());" , k: "pl" },
          ],
          [
            { s: "    broker", k: "pl" },
            { s: ".convertAndSend", k: "pl" },
            { s: '("/topic/doc/"', k: "str" },
            { s: " + event.docId(), event);" , k: "pl" },
          ],
          [{ s: "}" , k: "pl" }],
        ],
      },
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p className="section-label">SELECTED PROJECTS</p>

          <h2 className="projects-title">
            A few things I've built
            <br />
            <span>and worked on.</span>
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.number} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
