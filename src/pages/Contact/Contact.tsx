import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <p>Email</p>
          <a href="mailto:Kushal@example.com">Kushal@example.com</a>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <p>Phone</p>
          <a href="tel:+7019062439">+91 7019062439</a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <p>LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/kushal-7019062439/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/Kushal
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <p>GitHub</p>
          <a
            href="https://github.com/Kushal54732"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Kushal54732
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
