import { useState, useEffect } from 'react';
// TODO: Wire up the Footer component
import Footer from '../components/Footer';

function GetSupport() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    window.location.href = 'mailto:support@reviceapp.com?subject=Support Request';
  };

  return (
    <div className={`support-page ${isVisible ? 'visible' : ''}`}>
      <div className="support-container">
        <div className="support-content">
          <h1 className="support-title">
            <span className="support-title-gradient">Get Support</span>
          </h1>
          
          <h2 className="support-subtitle">We're here to help</h2>
          
          <p className="support-description">
            Click the button below to get in touch with us via email. 
            Whether you have a refund inquiry, technical issue, or any other questions, 
            our support team is ready to assist you.
          </p>

          <button 
            onClick={handleContactClick}
            className="contact-button"
          >
            <span className="button-text">Contact Us</span>
            <span className="button-glow"></span>
          </button>

          <div className="support-image-container">
            <img 
              src="https://placehold.co/400x800" 
              alt="Revice App Support"
              className="support-app-image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GetSupport;