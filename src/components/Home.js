import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import event1 from '../assets/images/event1.JPG';
import event5 from '../assets/images/1.jpg'; 
import service2 from '../assets/images/service2.jpg';
import event6 from '../assets/images/event6.JPG';
import event7 from '../assets/images/DSCF7235.JPG';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Future Computer Center</h1>
          <p>Your trusted partner for all your computer and technology needs</p>
          <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
      
      <div className="about-preview-section">
        <div className="about-preview-content">
          <h2>About Future Computer Center</h2>
          <p>Your trusted partner in technology since 1996, providing computers, services, training, and innovative products in Syria.</p>
          <button className="about-learn-btn">Learn</button>
        </div>
        <div className="about-preview-images">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Computer 1" />
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80" alt="Computer 2" />
        </div>
      </div>

      <div className="service-cards-section">
        <div className="service-card-item">
          <div className="service-card-bg desktop-bg"></div>
          <div className="service-card-content">
            <h3>Certification & Training</h3>
            <p>Empowering your career with professional certifications and comprehensive training programs</p>
            <button className="service-card-btn">Shop</button>
          </div>
        </div>
        
        <div className="service-card-item">
          <div className="service-card-bg services-bg"></div>
          <div className="service-card-content">
            <h3>Tech Services</h3>
            
            <p>All your tech needs in one place</p>
            <button className="service-card-btn">Learn</button>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Tech Sales</h3>
            <p>Premium computers, tablets, and cutting-edge technology solutions</p>
          </div>
          <div className="feature-card">
            <h3>Training & Certification</h3>
            <p>Professional courses in Adobe, Microsoft Office, Azure, CompTIA, and ICDL</p>
          </div>
          <div className="feature-card">
            <h3>Computer Services</h3>
            <p>Comprehensive repair, maintenance, and technical support services</p>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <p>See what our customers say about our products and services.</p>
        
        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="review-text">I purchased a tablet and received outstanding support. The quality is exceptional and the service was prompt. I will definitely return for future needs!</p>
            <div className="reviewer-info">
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=100&q=80" alt="Sara Nasser" className="reviewer-image" />
              <div className="reviewer-details">
                <h4>Sara Nasser</h4>
                <p>Aleppo, Syria</p>
              </div>
            </div>
          </div>
          
          <div className="review-card">
            <div className="review-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="review-text">Future Computer Center provided excellent service and quality products. Highly recommended!</p>
            <div className="reviewer-info">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Ali Almasri" className="reviewer-image" />
              <div className="reviewer-details">
                <h4>Ali Almasri</h4>
                <p>Damascus, Syria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section">
        <h2>Our Projects</h2>
        <p>Explore our impactful projects and community-driven initiatives.</p>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={event1} alt="Community Outreach" />
            </div>
            <div className="project-content">
              <h3>Community Outreach</h3>
              <p>Engaging with local communities through various initiatives.</p>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={event5} alt="Sustainability Efforts" />
            </div>
            <div className="project-content">
              <h3>Sustainability Efforts</h3>
              <p>Promoting eco-friendly practices in our operations.</p>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={service2} alt="Innovative Solutions" />
            </div>
            <div className="project-content">
              <h3>Innovative Solutions</h3>
              <p>Developing cutting-edge solutions for modern challenges.</p>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={event6} alt="Partnerships" />
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
            <img src={event7} alt="Street Scene" />
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

export default Home; 