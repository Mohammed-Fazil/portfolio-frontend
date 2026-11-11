function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-ground" aria-hidden="true" />

      <div className="hero-inner wrap-narrow">
        <p className="hero-pill">
          <span className="hero-pill-dot" aria-hidden="true" />
          Mohammed Fazil — open to work
        </p>

        <h1 className="hero-title h-display">
          I build Java backends <em>that hold.</em>
        </h1>

        <p className="hero-lead">
          Software engineer at Capgemini — two years of microservices, REST
          APIs and real-time systems.
        </p>

        <div className="hero-actions">
          <a href="#work" className="hero-button hero-button-primary">
            See the projects
          </a>

          <a href="#contact" className="hero-button hero-button-ghost">
            Email me
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-frame">
        <div className="terminal" aria-label="Terminal introducing Mohammed Fazil">
          <div className="terminal-bar" aria-hidden="true">
            <span className="terminal-dot terminal-dot-r" />
            <span className="terminal-dot terminal-dot-y" />
            <span className="terminal-dot terminal-dot-g" />
            <span className="terminal-title">mohammed@portfolio: ~</span>
          </div>

          <div className="terminal-body">
            <p className="term-line" style={{ "--d": "0.15s" }}>
              <span className="term-prompt">$ </span>
              <span className="term-cmd">whoami</span>
            </p>

            <p className="term-line" style={{ "--d": "0.75s" }}>
              <span className="term-out">
                mohammed-fazil — software engineer · Capgemini
              </span>
            </p>

            <p className="term-line" style={{ "--d": "1.35s" }}>
              <span className="term-prompt">$ </span>
              <span className="term-cmd">stack --daily</span>
            </p>

            <p className="term-line" style={{ "--d": "1.95s" }}>
              <span className="term-out term-out-long">
                java · spring boot · microservices · postgresql · react ·
                docker
              </span>
              <span className="term-out term-out-short">
                java · spring boot · microservices · react
              </span>
            </p>

            <p className="term-line" style={{ "--d": "2.55s" }}>
              <span className="term-prompt">$ </span>
              <span className="term-cmd">ls ~/principles</span>
            </p>

            <p className="term-line" style={{ "--d": "3.15s" }}>
              <span className="term-out term-out-long">
                understand-the-problem&nbsp;&nbsp;design-deliberately&nbsp;&nbsp;build-clear-software
              </span>
              <span className="term-out term-out-short">
                understand · design · build
              </span>
            </p>

            <p className="term-line" style={{ "--d": "3.75s" }}>
              <span className="term-prompt">$ </span>
              <span className="term-cursor" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
