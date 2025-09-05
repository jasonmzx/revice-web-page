import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-section">
          <Link to="/">
            <img 
              src="/REVICE_DARK_LOGO.png" 
              alt="Revice" 
              className="logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/features" 
            className={`nav-link ${isActive('/features') ? 'active' : ''}`}
          >
            Features
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </div>

        {/* Download Buttons - Desktop */}
        <div className="download-buttons">
          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-link"
          >
            <img 
              src="/apple_store_download_01.webp" 
              alt="Download on App Store" 
              className="apple-button"
            />
          </a>
          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="download-link"
          >
            <img 
              src="/android_store_download.png" 
              alt="Get it on Google Play" 
              className="android-button"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={mobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Slide Panel */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <Link 
          to="/"
          onClick={handleNavClick}
          className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/about"
          onClick={handleNavClick}
          className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
        >
          About
        </Link>
        <Link 
          to="/features"
          onClick={handleNavClick}
          className={`mobile-nav-link ${isActive('/features') ? 'active' : ''}`}
        >
          Features
        </Link>
        <Link 
          to="/contact"
          onClick={handleNavClick}
          className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
        >
          Contact
        </Link>
        
        {/* Mobile Download Buttons */}
        <div className="mobile-download-section">
          <h3 className="mobile-download-title">Get the App</h3>
          <div className="mobile-store-buttons">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="/apple_store_download_01.webp" 
                alt="Download on App Store" 
                className="mobile-apple-button"
              />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="/android_store_download.png" 
                alt="Get it on Google Play" 
                className="mobile-android-button"
              />
            </a>
          </div>
        </div>
        
        {/* Footer Links in Mobile Menu */}
        <div className="mobile-footer-links">
          <Link to="/privacy-policy" onClick={handleNavClick} className="mobile-footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" onClick={handleNavClick} className="mobile-footer-link">
            Terms of Service
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div 
          className="overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navigation;