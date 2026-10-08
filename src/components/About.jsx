import React from 'react';

function About() {
  // Focus areas array - rendered using map()
  const focusAreas = [
    'Backend Development',
    'Software Testing & QA',
    'Frontend Development',
    'Full Stack Development',
    'Database-driven applications',
  ];

  // Core competency highlights from resume
  const coreCompetencies = [
    'JWT Authentication',
    'Role-based Authorization',
    'bcrypt Password Hashing',
    'RESTful CRUD Operations',
    'API Request Validation',
  ];

  return (
    <section id="about" className="section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief overview of my technical background and focus</p>

        <div className="about-grid">
          {/* Main Summary Card */}
          <div className="about-card">
            <h3>Professional Summary</h3>
            <p>
              I am an entry-level Software Developer targeting <strong>Full Stack Developer</strong> and <strong>Software Testing & QA</strong> roles.
              I hold a Bachelor's degree in Computer Science and Engineering (Data Science) and have hands-on experience
              building modular, secure REST APIs using JavaScript, Node.js, Express.js, MongoDB, and Mongoose.
            </p>
            <p>
              I enjoy solving backend architectural challenges, designing clean database schemas, and building responsive,
              user-friendly interfaces with React.
              I have a strong focus on problem-solving, application quality, and writing clean, maintainable code.
            </p>
          </div>

          {/* Quick Focus & Competency Highlights */}
          <div className="about-card">
            <h3>Core Interests</h3>
            <div className="tag-list">
              {focusAreas.map((item, index) => (
                <span key={index} className="tag tag-accent">
                  {item}
                </span>
              ))}
            </div>

            <h3 style={{ marginTop: '1.5rem' }}>Backend Competencies</h3>
            <div className="tag-list">
              {coreCompetencies.map((skill, index) => (
                <span key={index} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
