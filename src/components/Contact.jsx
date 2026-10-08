import React, { useState } from 'react';

function Contact() {
  // Controlled input state: Object holding values for all inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to hold field validation error messages
  const [errors, setErrors] = useState({});

  // State to show a success message after submitting
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Single unified change handler for all input fields
  // Uses ES6 computed property names: [name]: value
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Updating an object in state using the spread operator (...)
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear the error for this field as soon as the user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    // 1. Name validation (check if empty or only spaces)
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    // 2. Email validation (check if empty, then check regex pattern)
    // Regex explanation:
    // ^[^\s@]+  : starts with one or more characters that are NOT whitespace or @
    // @         : followed by a literal '@' symbol
    // [^\s@]+   : followed by domain name characters (no spaces or @)
    // \.        : followed by a literal dot '.'
    // [^\s@]+$  : ends with domain extension characters (e.g., com, org)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    // 3. Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    return newErrors;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    // Prevent the default browser reload on form submit
    e.preventDefault();

    // Run our validation
    const validationErrors = validateForm();

    // If there are errors (object has keys), update errors state and stop
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, simulate successful submission
    setIsSubmitted(true);
    setErrors({});

    // Reset the form fields back to empty strings
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a question or looking to collaborate? Feel free to reach out!
        </p>

        <div className="contact-grid">
          {/* Contact Information Column */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p className="contact-info-intro">
              I am actively seeking full-time opportunities as an entry-level Backend or Full Stack Developer.
            </p>

            <ul className="contact-details-list">
              <li className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Nellore, India</p>
                </div>
              </li>
              <li className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:bodugudivya06@gmail.com">bodugudivya06@gmail.com</a>
                  </p>
                </div>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href="tel:+917416487066">+91 7416487066</a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="contact-socials">
              <a
                href="https://linkedin.com/in/divya-bodugu-97a3b729"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href="https://github.com/divya-bodugu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub Profile ↗
              </a>
            </div>
          </div>

          {/* Controlled Form Column */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>

            {/* Conditional Rendering: Success notification banner */}
            {isSubmitted && (
              <div className="alert-success">
                <strong>✓ Thank you!</strong> Your message has been submitted.
                <p className="alert-subtext">
                  (Note: This is a frontend demo simulation using React state; no real email is sent.)
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Divya Bodugu"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                />
                {/* Conditional Rendering: Show error message if present */}
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`form-input ${errors.message ? 'input-error' : ''}`}
                ></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
