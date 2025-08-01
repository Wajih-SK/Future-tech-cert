import React from 'react';
import './Services.css';

import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import service4 from '../assets/images/service4.jpg';

function Services() {
  return (
    <div className="services">
      <div className="services-header">
        <h1>Our Tech Solutions</h1>
        <p>Comprehensive technology solutions including sales, services, and our own brand products.</p>
      </div>
      
      <div className="services-content">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img src={service1} alt="Tech Sales" />
            </div>
            <div className="service-info">
              <h3>Tech Sales</h3>
              <p>Wide selection of desktops, laptops, tablets, smartphones, accessories, and software solutions.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src={service2} alt="Our Brand Tablets" />
            </div>
            <div className="service-info">
              <h3>Our Brand Tablets</h3>
              <p>Premium tablets designed and manufactured by FutureCC with cutting-edge technology and performance.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
                <img src={service3} alt="Tech Services" />
            </div>
            <div className="service-info">
              <h3>Tech Services</h3>
              <p>Professional repair, maintenance, and technical support for all types of devices and equipment.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
                <img src={service4} alt="Custom Solutions" />
            </div>
            <div className="service-info">
              <h3>Custom Solutions</h3>
              <p>Tailored technology solutions for businesses and organizations with specific requirements.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="location-section">
        <div className="location-content">
          <div className="location-info">
            <h2>Our Location</h2>
            <p>Visit us at Future Computer Center in Syria for all your technology needs, including sales, services, training, and our exclusive products.</p>
            
            <div className="location-details">
              <div className="location-item">
                <h3>Syria</h3>
                <p>123 Tech Street, Syria</p>
              </div>
              
              <div className="location-item">
                <h3>Hours</h3>
                <p>9 AM - 5 PM</p>
              </div>
            </div>
          </div>
          
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Future Computer Center Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services; 