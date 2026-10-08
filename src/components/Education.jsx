import React from 'react';

function Education() {
  const educationList = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering (Data Science)',
      institution: 'Audisankara College of Engineering & Technology, Gudur',
      period: 'October 2020 – May 2024',
      description:
        'Completed coursework in Data Structures, Algorithms, Database Management Systems, Operating Systems, Web Technologies, and Data Science fundamentals.'
    }
  ];

  return (
    <section id="education" className="section section-dark">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic qualification & foundation</p>

        <div className="education-list">
          {educationList.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-badge">{item.period}</div>
              <h3 className="education-degree">{item.degree}</h3>
              <h4 className="education-institution">{item.institution}</h4>
              <p className="education-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
