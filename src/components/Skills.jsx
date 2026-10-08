import React from 'react';

function Skills() {
  // Array of skill categories and their individual items
  const skillCategories = [
    {
      category: 'Languages',
      items: ['JavaScript']
    },
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'React']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication']
    },
    {
      category: 'Database',
      items: ['MongoDB', 'Mongoose']
    },
    {
      category: 'Developer & Testing Tools',
      items: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'Swagger']
    }
  ];

  return (
    <section id="skills" className="section section-dark">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build robust software
        </p>

        {/* Outer map(): Iterates over each skill category */}
        <div className="skills-grid">
          {skillCategories.map((group, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category-title">{group.category}</h3>

              {/* Inner map(): Iterates over items inside each category */}
              <ul className="skill-list">
                {group.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-bullet">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
