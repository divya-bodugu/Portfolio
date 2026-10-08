import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  // Array of project data objects
  const projectList = [
    {
      title: 'Project Management System',
      description:
        'A comprehensive backend service providing secure user management, role authentication, task tracking, and audit workflows.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'JWT',
        'bcrypt',
        'Nodemailer',
        'REST APIs'
      ],
      features: [
        'Developed RESTful CRUD APIs for users, projects, and tasks',
        'Secured protected routes with custom JWT authentication middleware and bcrypt hashing',
        'Modeled one-to-many relationships using Mongoose object references and population',
        'Implemented query filtering, sorting, and pagination parameters',
        'Built email-based OTP password reset workflow with expiration checks via Nodemailer',
        'Created audit logging middleware to track create, update, and delete events',
        'Centralized error handling for invalid ObjectIDs, duplicates, and auth errors'
      ],
      githubUrl: 'https://github.com/divya-bodugu'
    },
    {
      title: 'E-Commerce REST API',
      description:
        'A scalable e-commerce backend engine supporting role-based catalog management, secure checkout pipelines, and bulk data operations.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'REST APIs',
        'JWT',
        'Swagger'
      ],
      features: [
        'Designed modular RESTful endpoints following standard HTTP response conventions',
        'Implemented user authentication alongside strict role-based access control (Admin / Customer)',
        'Built product management CRUD operations with Mongoose schema validations',
        'Engineered multi-field search, category filtering, sorting, and paginated results',
        'Integrated CSV import and export capabilities for bulk catalog updates',
        'Documented endpoints with Swagger / OpenAPI specifications for API testing'
      ],
      githubUrl: 'https://github.com/divya-bodugu'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world backend systems and REST APIs built with modern web technologies
        </p>

        {/* Map through project objects and render reusable ProjectCard components */}
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              features={project.features}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
