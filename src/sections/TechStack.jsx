import { FaJava, FaReact, FaDocker } from "react-icons/fa";

import { SiSpringboot, SiPostgresql } from "react-icons/si";

import { Network } from "lucide-react";

function TechStack() {
  return (
    <section className="tech-stack">
      <div className="tech-stack-container">
        <div className="tech-item">
          <FaJava className="tech-icon java-icon" />
          <span>Java</span>
        </div>

        <div className="tech-item">
          <SiSpringboot className="tech-icon spring-icon" />
          <span>Spring Boot</span>
        </div>

        <div className="tech-item">
          <Network
            className="tech-icon microservices-icon"
            aria-hidden="true"
          />
          <span>Microservices</span>
        </div>

        <div className="tech-item">
          <FaReact className="tech-icon react-icon" />
          <span>React</span>
        </div>

        <div className="tech-item">
          <SiPostgresql className="tech-icon postgres-icon" />
          <span>PostgreSQL</span>
        </div>

        <div className="tech-item">
          <FaDocker className="tech-icon docker-icon" />
          <span>Docker</span>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
