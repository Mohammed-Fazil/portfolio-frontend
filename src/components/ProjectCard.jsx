import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

function CodeLine({ tokens }) {
  return (
    <>
      {tokens.map((token, index) => (
        <span key={index} className={token.k ? `tok-${token.k}` : undefined}>
          {token.s}
        </span>
      ))}
      {"\n"}
    </>
  );
}

function ProjectCard({
  number,
  title,
  type,
  description,
  technologies,
  githubUrl,
  liveUrl,
  visual,
}) {
  return (
    <article className="project-card">
      <div className="project-visual" aria-hidden="true">
        <div className="project-visual-bar">
          <span className="project-visual-dot" />
          <span className="project-visual-dot" />
          <span className="project-visual-dot" />
          <span className="project-visual-file">{visual.file}</span>
        </div>

        <pre>
          <code>
            {visual.lines.map((tokens, index) => (
              <CodeLine key={index} tokens={tokens} />
            ))}
          </code>
        </pre>
      </div>

      <span className="project-meta">{number} — {type}</span>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      <div className="project-tech">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="project-github"
          aria-label={`View ${title} on GitHub`}
        >
          <FaGithub size={18} />
          <span>Source code</span>
          <span className="project-arrow">↗</span>
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-github"
            aria-label={`View ${title} live`}
          >
            <ExternalLink size={17} />
            <span>Live demo</span>
            <span className="project-arrow">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
