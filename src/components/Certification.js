import React from 'react';
import './Certification.css';

// Import images
import session1 from '../assets/images/session1.jpg';
import dscf7237 from '../assets/images/event6.JPG';
import dscf7235 from '../assets/images/session2.png';
import training1 from '../assets/images/session3.png';
import training2 from '../assets/images/session4.png';
import training3 from '../assets/images/r2.jpg';

function Certification() {
  return (
    <div className="certification">
      {/* Hero Section */}
      <div className="certification-hero">
        <h1>Empowering Your Future with Skills, Certifications, and Career Guidance</h1>
        <p>We provide internationally recognized certifications, hands-on training, and personalized mentorship to help you gain the hard skills and career confidence you need to succeed in today's tech-driven world.</p>
        <button className="cta-button">👉 Explore Our Programs</button>
      </div>

      {/* Certifications & Technical Training */}
      <div className="certifications-section">
        <h2>Build Hard Skills That Open Doors</h2>
        <p>From foundational digital literacy to advanced professional certifications, our training programs prepare you for the competitive job market. Whether you're starting fresh or looking to upskill, our courses are designed to give you the knowledge and credentials employers value.</p>
        
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="cert-icon">🌟</div>
            <h3>Build confidence & engage in local cultures</h3>
          </div>
          
          <div className="certification-card">
            <div className="cert-icon">📜</div>
            <h3>Access qualifications that portray progress</h3>
          </div>
          
          <div className="certification-card">
            <div className="cert-icon">💻</div>
            <h3>Find online support and teaching resources</h3>
          </div>
          
          <div className="certification-card">
            <div className="cert-icon">🛠️</div>
            <h3>Digital tools that transform learning & teaching</h3>
          </div>
          
          <div className="certification-card">
            <div className="cert-icon">📚</div>
            <h3>eTextbooks that offer next-generation learning</h3>
          </div>
          
          <div className="certification-card">
            <div className="cert-icon">🎯</div>
            <h3>Get widely respected skills-based experience</h3>
          </div>
        </div>
      </div>

      {/* Career Development & Mentorship */}
      <div className="mentorship-section">
        <h2>More Than Training — A Path to Success</h2>
        <p>We don't just teach skills, we prepare you for careers. Our mentorship and career development programs guide you through every step of your journey, from building a standout résumé to excelling in interviews.</p>
        
        <div className="mentorship-panel">
          <div className="mentorship-content">
            <div className="mentorship-features">
              <div className="feature-item">
                <div className="feature-icon">📝</div>
                <h4>Resume-building workshops and one-on-one review sessions</h4>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎤</div>
                <h4>Interview practice and personalized feedback</h4>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🌐</div>
                <h4>Guidance on where to find opportunities and resources to keep learning</h4>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h4>Mentorship from industry professionals who understand your path</h4>
              </div>
            </div>
          </div>
          
          <div className="mentorship-image">
            <img src={training3} alt="Career Mentorship" />
          </div>
        </div>

        <div className="mentorship-programs">
          <div className="program-column">
            <div className="program-icon">💡</div>
            <h3>Lessons in Entrepreneurship</h3>
            <p>Meetings, practical lessons in entrepreneurship and personal development are given to students, who then apply what they have learned to their companies. We also have guest speakers who cover topics such as programming, AI, and financing.</p>
          </div>
          
          <div className="program-column">
            <div className="program-icon">👥</div>
            <h3>Industry Mentors and Lecturers</h3>
            <p>Teams are provided with industry mentors who are field expert. Past mentors include the former director of velocity, startup CEOs, software engineers, Professors, and even farmers! Mentors provide valuable input for members.</p>
          </div>
          
          <div className="program-column">
            <div className="program-icon">🎯</div>
            <h3>Pitch Training and Development</h3>
            <p>Teams are set up to participate in a variety of pitching competitions throughout the year.</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="how-it-works-section">
        <h2>Your Journey With Us</h2>
        
        <div className="journey-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose Your Program</h3>
            <p>Select certifications or mentorship suited to your goals.</p>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>Train with Experts</h3>
            <p>Gain hands-on skills through guided learning.</p>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Certified</h3>
            <p>Receive globally recognized credentials.</p>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <h3>Launch Your Career</h3>
            <p>Apply your skills with confidence, backed by our mentorship.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-section">
        <h2>Real People. Real Success.</h2>
        <p>Hear from individuals who transformed their skills and careers with us.</p>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Thanks to the mentorship program, I not only earned my ICDL but also landed my first job in IT support within 3 months."</p>
              <div className="testimonial-author">
                <img src={session1} alt="Student" />
                <div>
                  <h4>Ahmed Al-Rashid</h4>
                  <p>IT Support Specialist</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The Adobe training completely changed my career path. I now work as a graphic designer for a major company."</p>
              <div className="testimonial-author">
                <img src={training1} alt="Student" />
                <div>
                  <h4>Fatima Hassan</h4>
                  <p>Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The career guidance helped me understand what employers want. I got my Security+ certification and doubled my salary."</p>
              <div className="testimonial-author">
                <img src={training2} alt="Student" />
                <div>
                  <h4>Omar Khalil</h4>
                  <p>Cybersecurity Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="enrollment-section">
        <h2>Start Building Your Future Today</h2>
        <p>Join our community of learners and professionals. Gain certifications, develop hard skills, and receive the guidance you need to achieve your career goals.</p>
        
        <div className="enrollment-buttons">
          <button className="enroll-btn">👉 Enroll Now</button>
          <button className="consultation-btn">Book a Free Consultation</button>
        </div>
      </div>

      {/* Past Sessions Gallery */}
      <div className="past-sessions">
        <h2>Training Sessions & Events</h2>
        <p>Take a look at some of our successful training sessions and workshops</p>
        
        <div className="sessions-gallery">
          <div className="session-item">
            <img src={session1} alt="Adobe Training Session" />
          </div>
          
          <div className="session-item">
            <img src={dscf7237} alt="Microsoft Office Training" />
          </div>
          
          <div className="session-item">
            <img src={dscf7235} alt="Azure Training" />
          </div>
          
          <div className="session-item">
            <img src={training1} alt="CompTIA Training" />
          </div>
          
          <div className="session-item">
            <img src={training2} alt="ICDL Training" />
          </div>
          
          <div className="session-item">
            <img src={training3} alt="Corporate Training" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certification; 