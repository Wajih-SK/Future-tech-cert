import React from 'react';
import './Certification.css';

// Import images
import session1 from '../assets/images/session1.jpg';
import dscf7237 from '../assets/images/event6.JPG';
import dscf7235 from '../assets/images/DSCF7235.JPG';
import training1 from '../assets/images/event3.JPG';
import training2 from '../assets/images/event2.JPG';
import training3 from '../assets/images/event4.JPG';

function Certification() {
  return (
    <div className="certification">
      <div className="certification-hero">
        <h1>Certification & Training</h1>
        <p>Empowering your career with professional certifications and comprehensive training programs</p>
      </div>

      <div className="training-programs">
        <h2>Our Training Programs</h2>
        <p>Comprehensive training solutions designed to enhance your skills and advance your career</p>
        
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon">
              <i className="fab fa-adobe"></i>
            </div>
            <h3>Adobe Creative Suite</h3>
            <p>Master Photoshop, Illustrator, InDesign, Premiere Pro, and more. Learn professional design and video editing skills.</p>
            <ul>
              <li>Photoshop CC</li>
              <li>Illustrator CC</li>
              <li>InDesign CC</li>
              <li>Premiere Pro</li>
              <li>After Effects</li>
            </ul>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <i className="fab fa-microsoft"></i>
            </div>
            <h3>Microsoft Office Suite</h3>
            <p>Excel in Word, Excel, PowerPoint, Access, and Outlook. Essential skills for modern workplaces.</p>
            <ul>
              <li>Microsoft Word</li>
              <li>Microsoft Excel</li>
              <li>Microsoft PowerPoint</li>
              <li>Microsoft Access</li>
              <li>Microsoft Outlook</li>
            </ul>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Microsoft Azure</h3>
            <p>Cloud computing certifications for Azure Fundamentals, Administrator, Developer, and Solutions Architect.</p>
            <ul>
              <li>Azure Fundamentals (AZ-900)</li>
              <li>Azure Administrator (AZ-104)</li>
              <li>Azure Developer (AZ-204)</li>
              <li>Azure Solutions Architect</li>
            </ul>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>CompTIA Training</h3>
            <p>Industry-recognized IT certifications for networking, security, and infrastructure professionals.</p>
            <ul>
              <li>CompTIA A+</li>
              <li>CompTIA Network+</li>
              <li>CompTIA Security+</li>
              <li>CompTIA Linux+</li>
              <li>CompTIA Cloud+</li>
            </ul>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3>ICDL Certification</h3>
            <p>International Computer Driving License - Essential digital skills for the modern workplace.</p>
            <ul>
              <li>Computer Essentials</li>
              <li>Online Essentials</li>
              <li>Word Processing</li>
              <li>Spreadsheets</li>
              <li>Presentation</li>
            </ul>
          </div>

          <div className="program-card">
            <div className="program-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Custom Training</h3>
            <p>Tailored training programs designed to meet your specific business needs and requirements.</p>
            <ul>
              <li>Corporate Training</li>
              <li>Group Sessions</li>
              <li>One-on-One Coaching</li>
              <li>Online Training</li>
              <li>Certification Prep</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="past-sessions">
        <h2>Past Training Sessions & Events</h2>
        <p>Take a look at some of our successful training sessions and workshops</p>
        
        <div className="sessions-gallery">
          <div className="session-item">
            <img src={session1} alt="Adobe Training Session" />
            <div className="session-overlay">
              {/* <h4>Adobe Creative Suite Workshop</h4> */}
              {/* <p>Professional design training session</p> */}
            </div>
          </div>
          
          <div className="session-item">
            <img src={dscf7237} alt="Microsoft Office Training" />
            <div className="session-overlay">
              {/* <h4>Microsoft Office Certification</h4> */}
              {/* <p>Office productivity skills workshop</p> */}
            </div>
          </div>
          
          <div className="session-item">
            <img src={dscf7235} alt="Azure Training" />
            <div className="session-overlay">
              {/* <h4>Azure Cloud Training</h4> */}
              {/* <p>Cloud computing certification prep</p> */}
            </div>
          </div>
          
          <div className="session-item">
            <img src={training1} alt="CompTIA Training" />
            <div className="session-overlay">
              {/* <h4>CompTIA Security+</h4> */}
              {/* <p>Cybersecurity certification training</p> */}
            </div>
          </div>
          
          <div className="session-item">
            <img src={training2} alt="ICDL Training" />
            <div className="session-overlay">
              {/* <h4>ICDL Certification</h4> */}
              {/* <p>Digital literacy certification</p> */}
            </div>
          </div>
          
          <div className="session-item">
            <img src={training3} alt="Corporate Training" />
            <div className="session-overlay">
              {/*  <h4>Corporate Training</h4> */}
              {/* <p>Custom business solutions training</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="certification-benefits">
        <h2>Why Choose Our Training?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <i className="fas fa-certificate"></i>
            <h3>Official Certifications</h3>
            <p>Receive internationally recognized certifications upon completion</p>
          </div>
          
          <div className="benefit-item">
            <i className="fas fa-users"></i>
            <h3>Expert Instructors</h3>
            <p>Learn from certified professionals with years of industry experience</p>
          </div>
          
          <div className="benefit-item">
            <i className="fas fa-clock"></i>
            <h3>Flexible Scheduling</h3>
            <p>Choose from morning, afternoon, or evening sessions to fit your schedule</p>
          </div>
          
          <div className="benefit-item">
            <i className="fas fa-laptop"></i>
            <h3>Hands-on Practice</h3>
            <p>Gain practical experience with real-world projects and exercises</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certification; 