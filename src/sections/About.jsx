function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="section-label">ABOUT ME</p>

          <h2 className="about-title">
            Thoughtful engineering.
            <br />
            <span>Reliable software.</span>
          </h2>

          <p className="about-description">
            I believe good engineering starts with understanding the problem and
            making deliberate decisions. My approach is to keep solutions clear
            and practical while considering reliability, maintainability, and
            how they will evolve over time.
          </p>
        </div>

        <div className="about-principles">
          <div className="about-principle">
            <span className="principle-number">01</span>

            <div>
              <h3>Understand</h3>
              <p>Start with the problem, requirements, and constraints.</p>
            </div>
          </div>

          <div className="about-principle">
            <span className="principle-number">02</span>

            <div>
              <h3>Design</h3>
              <p>Think through the solution and make deliberate decisions.</p>
            </div>
          </div>

          <div className="about-principle">
            <span className="principle-number">03</span>

            <div>
              <h3>Build</h3>
              <p>Turn the design into clear, reliable software.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
