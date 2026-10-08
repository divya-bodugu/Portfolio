import React from 'react';

function Certifications() {
  const certificationsList = [
    {
      title: 'Python Essentials',
      issuer: 'Cisco Networking Academy',
      category: 'Programming & Logic'
    },
    {
      title: 'SQL Basics & Intermediate',
      issuer: 'HackerRank',
      category: 'Database & Querying'
    },
    {
      title: 'Data Analytics and Visualization Job Simulation',
      issuer: 'Forage by Accenture',
      category: 'Data Analysis'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Verified credentials and continuous learning</p>

        <div className="certifications-grid">
          {certificationsList.map((cert, index) => (
            <div key={index} className="cert-card">
              <span className="cert-category">{cert.category}</span>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">Issued by: {cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
