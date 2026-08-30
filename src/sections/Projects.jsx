import { FileText, Link } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      number: "01",
      icon: Link,
      title: "TinyURL",
      type: "URL Shortening Service",
      description:
        "A URL shortening service for creating short, easy-to-share links.",
      technologies: ["Java", "Spring Boot", "MongoDB"],
      githubUrl: "https://github.com/Mohammed-Fazil/tinyurl",
    },
    {
      number: "02",
      icon: FileText,
      title: "DocFlow",
      type: "Collaborative Document Editor",
      description:
        "A collaborative document editor with real-time editing, document sharing, and role-based access control.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
      githubUrl:
        "https://github.com/Mohammed-Fazil/docflow-collaborative-editor",
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
