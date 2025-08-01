import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="company-story-header">
        <h1>Our Company Story</h1>
        <p>Discover our mission, history, and significant achievements that define who we are today.</p>
      </div>
      
      <div className="about-journey-section">
        <div className="about-journey-content">
          <div className="about-journey-text">
            <h2>About Us: Our Journey Together</h2>
            <p>Discover our mission, history, and achievements that define our company and our commitment to excellence in everything we do.</p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>150+</h3>
                <p>Join Us</p>
              </div>
              <div className="stat-item">
                <h3>15</h3>
                <p>Trusted by Many</p>
              </div>
            </div>
          </div>
          
          <div className="about-journey-image">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80" alt="Our Journey" />
          </div>
        </div>
      </div>

      <div className="projects-section">
        <h2>Our Projects</h2>
        <p>Explore our impactful projects and community-driven initiatives.</p>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" alt="Community Outreach" />
            </div>
            <div className="project-content">
              <h3>Community Outreach</h3>
              <p>Engaging with local communities through various initiatives.</p>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" alt="Sustainability Efforts" />
            </div>
            <div className="project-content">
              <h3>Sustainability Efforts</h3>
              <p>Promoting eco-friendly practices in our operations.</p>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Innovative Solutions" />
            </div>
            <div className="project-content">
              <h3>Innovative Solutions</h3>
              <p>Developing cutting-edge solutions for modern challenges.</p>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80" alt="Partnerships" />
            </div>
            <div className="project-content">
              <h3>Partnerships</h3>
              <p>Collaborating with organizations to drive positive change.</p>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-section">
        <div className="testimonial-content">
          <div className="testimonial-image">
            <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80" alt="Street Scene" />
          </div>
          <div className="testimonial-box">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"This company has consistently exceeded my expectations with their outstanding service and innovative solutions."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 