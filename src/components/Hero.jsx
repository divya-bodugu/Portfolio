import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Availability Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for Full Stack Developer and Software Testing & QA roles.
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Hi, I'm <span className="highlight-text">Divya Bodugu</span>
        </h1>

        {/* Subtitle / Role */}
        <h2 className="hero-subtitle">Entry-Level Software Developer</h2>

        {/* Short Summary Description */}
        <p className="hero-description">
          Passionate about building reliable backend systems and responsive web
          applications using JavaScript, Node.js, Express.js, MongoDB and React.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

        {/* External Social Links */}
        <div className="hero-social-links">
          <a
            href="https://github.com/divya-bodugu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/divya-bodugu-97a3b729"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
