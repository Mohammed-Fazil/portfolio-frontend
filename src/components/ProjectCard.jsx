import { FaGithub } from "react-icons/fa";

function ProjectCard({
  number,
  icon: Icon,
  title,
  type,
  description,
  technologies,
  githubUrl,
}) {
  return (
    <article className="project-card">
      <div className="project-icon">
        <Icon size={28} strokeWidth={1.7} />
      </div>

      <span className="project-number">{number}</span>

      <h3 className="project-title">{title}</h3>

      <p className="project-type">{type}</p>

      <p className="project-description">{description}</p>

      <div className="project-tech">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="project-github"
        aria-label={`View ${title} on GitHub`}
      >
        <FaGithub size={19} />
        <span>GitHub</span>
        <span className="project-arrow">↗</span>
      </a>
    </article>
  );
}

export default ProjectCard;
