import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Legal Links */}
          <div className="footer-links">
            <a href="/terms-of-service" className="footer-link">Terms of Service</a>
            <span className="footer-divider">•</span>
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <div className="footer-copyright">
            © 2025 Atevo Inc. All rights reserved.
          </div>
          </div>

      
        </div>
      </div>
    </footer>
  );
}

export default Footer;