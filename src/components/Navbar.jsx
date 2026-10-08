import React, { useState } from 'react';

function Navbar() {
  // useState hook to control whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu when a navigation link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          Divya Bodugu
        </a>

        {/* Mobile Hamburger Button */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {/* Conditional rendering: show '✕' when open, '☰' when closed */}
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Nav Links: Conditional class applied for mobile toggle */}
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>Projects</a>
          </li>
          <li>
            <a href="#education" onClick={handleLinkClick}>Education</a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
