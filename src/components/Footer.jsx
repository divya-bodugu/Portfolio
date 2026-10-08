import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copyright">
          © {currentYear} Divya Bodugu. All rights reserved. Built with React & Vanilla CSS.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/divya-bodugu"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/divya-bodugu-97a3b729"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="mailto:bodugudivya06@gmail.com"
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
