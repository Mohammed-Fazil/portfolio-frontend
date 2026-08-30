import { CalendarDays } from "lucide-react";

function ExperienceItem({ number, role, company, duration, period }) {
  return (
    <article className="experience-item">
      <span className="experience-number" aria-hidden="true">
        {number}
      </span>

      <div className="experience-main">
        <div className="experience-role-row">
          <span className="experience-period">
            <CalendarDays size={14} />
            {period}
          </span>

          <h3 className="experience-role">{role}</h3>
        </div>

        <p className="experience-company">{company}</p>

        <p className="experience-duration">{duration}</p>
      </div>
    </article>
  );
}

export default ExperienceItem;
