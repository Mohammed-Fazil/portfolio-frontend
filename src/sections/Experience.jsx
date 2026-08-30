import ExperienceItem from "../components/ExperienceItem";

function Experience() {
  const experiences = [
    {
      number: "01",
      role: "Software Engineer",
      company: "Capgemini",
      duration: "2 years 2 months",
      period: "Jun 2024 — Jul 2026",
    },
    {
      number: "02",
      role: "Junior Software Engineer",
      company: "Bozhon Precision Industry Technology",
      duration: "4 months",
      period: "Feb 2024 — Jun 2024",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2 className="experience-title">
            Where I've applied
            <br />
            <span>my skills.</span>
          </h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.number} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
