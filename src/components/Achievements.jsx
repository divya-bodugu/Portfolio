import React from 'react';

function Achievements() {
  const achievementsList = [
    {
      title: 'Merit Certificate for Internship Excellence',
      organization: 'IIDT (Blackbucks)',
      description:
        'Awarded a Merit Certificate for outstanding performance and contribution during the Data Analysis Internship.'
    },
    {
      title: 'Heartfulness Experience Life Potential Program',
      organization: 'Heartfulness Educational Trust',
      description:
        'Completed the experiential development program focused on mindfulness, leadership, and emotional intelligence.'
    }
  ];

  return (
    <section id="achievements" className="section section-dark">
      <div className="section-container">
        <h2 className="section-title">Achievements & Recognition</h2>
        <p className="section-subtitle">Milestones and extracurricular honors</p>

        <div className="achievements-grid">
          {achievementsList.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">★</div>
              <div className="achievement-content">
                <h3 className="achievement-title">{item.title}</h3>
                <h4 className="achievement-org">{item.organization}</h4>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
