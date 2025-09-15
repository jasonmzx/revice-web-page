import { useState, useEffect } from 'react';
// TODO: Wire up the Footer component
import Footer from '../components/Footer';

function GetSupport() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    window.location.href = 'mailto:help@revice.app?subject=Support Request';
  };

  return (
    <div className={`support-page ${isVisible ? 'visible' : ''}`}>
      <div className="support-container">
        <div className="support-content">
          <h1 className="support-title">
            <span className="support-title-gradient">Get Support</span>
          </h1>
          
          <div className="support-intro">
            <h2 className="support-subtitle">We're here to help you succeed</h2>

            <p className="support-description">
              Get personalized assistance from our support team. Whether you need help with setup,
              have billing questions, or encounter technical issues, we're ready to help.
            </p>
          </div>

          <div className="alert-box">
            <div className="alert-header">🚨 Crisis Support</div>
            <p>If you're experiencing a mental health crisis or emergency, please contact <strong>911</strong> or the <strong>National Suicide Prevention Lifeline at 988</strong>. Our team provides technical support, not crisis intervention.</p>
          </div>

          <div className="support-cards">
            <div className="support-card">
              <div className="card-icon">⚡</div>
              <h3>Quick Response</h3>
              <p>We typically respond within <strong>24-48 hours</strong> during business hours</p>
              <div className="hours-info">Monday - Friday, 9 AM - 6 PM EST</div>
            </div>

            <div className="support-card">
              <div className="card-icon">🛠️</div>
              <h3>What We Help With</h3>
              <div className="help-categories">
                <div className="category">
                  <strong>Technical Support</strong>
                  <span>App troubleshooting & bugs</span>
                </div>
                <div className="category">
                  <strong>Account & Setup</strong>
                  <span>Registration & profile help</span>
                </div>
                <div className="category">
                  <strong>Billing & Subscriptions</strong>
                  <span>Payments & plan changes</span>
                </div>
                <div className="category">
                  <strong>Privacy & Security</strong>
                  <span>Data protection questions</span>
                </div>
                <div className="category">
                  <strong>General Questions</strong>
                  <span>Features & how-to guidance</span>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleContactClick}
            className="contact-button"
          >
            <span className="button-text">Contact Us</span>
            <span className="button-glow"></span>
          </button>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GetSupport;