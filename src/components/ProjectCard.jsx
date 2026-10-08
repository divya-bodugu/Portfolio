import React from 'react';

// Reusable component demonstrating props destructuring
function ProjectCard({ title, description, technologies, features, githubUrl }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
        <span className="project-type-tag">Backend / REST API</span>
      </div>

      <p className="project-description">{description}</p>

      {/* Technology pills rendered with map() */}
      <div className="project-tech-stack">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      {/* Feature bullet list rendered with map() */}
      <div className="project-features">
        <h4 className="features-title">Key Implementation Features:</h4>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              <span className="feature-check">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer with GitHub action button */}
      <div className="project-card-footer">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          View on GitHub ↗
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
