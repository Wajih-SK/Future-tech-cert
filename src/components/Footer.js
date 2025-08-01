import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Get in touch for inquiries and support.</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>SUPPORT</h3>
          <p className="contact-info">+963-123-456-7890</p>
          <p className="contact-info">info@futurecompcenter.com</p>
        </div>

        <div className="footer-column">
          <h3>SERVICES</h3>
          <p>Enter your email address</p>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              placeholder="Your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit your inquiry now</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 