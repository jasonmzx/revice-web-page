import { useState, useEffect } from "react";

// Styles
import "./index.css";

// Navigation Component
function Navigation({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-section">
          <img 
            src="/REVICE_DARK_LOGO.png" 
            alt="Revice" 
            className="logo"
            onClick={() => setCurrentPage('home')}
          />
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {['home', 'about', 'features', 'contact'].map((page) => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)} 
              className={`nav-link ${currentPage === page ? 'active' : ''}`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
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
        {['home', 'about', 'features', 'contact'].map((page) => (
          <button 
            key={page}
            onClick={() => handleNavClick(page)} 
            className={`mobile-nav-link ${currentPage === page ? 'active' : ''}`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
        
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

// Home Page Component
function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        {/* Background App Graphic - Desktop Only */}
        <div className="hero-background-image">
          {/* Placeholder for fancy app graphic - will be replaced by designer's PNG */}
          <img 
            src="https://placehold.co/1300x1100" 
            alt="Revice App Interface"
            className="hero-bg-graphic"
          />
        </div>

        <div className="hero-content">
          <div className="hero-left-content">
            <h1 className="hero-title">
              <span className="hero-title-gradient">Quit Your Vices.</span>
              <span className="hero-title-white">Get Sober with Revice.</span>
              <span className="hero-title-subtle">Reclaim Your Life.</span>
            </h1>
            
            <p className="hero-subtitle">
              Your AI companion for lasting sobriety. Personalized support, 
              real-time insights, and evidence-based recovery—all in one app.
            </p>

            {/* Download Buttons */}
            <div className="hero-buttons">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="hero-store-link">
                <img 
                  src="/apple_store_download_01.webp" 
                  alt="Download on App Store" 
                  className="hero-apple-button"
                />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="hero-store-link">
                <img 
                  src="/android_store_download.png" 
                  alt="Get it on Google Play" 
                  className="hero-android-button"
                />
              </a>
            </div>
            
            {/* Mobile hero image placeholder */}
            <img 
              src="https://placehold.co/1300x1100" 
              alt="Revice App"
              className="mobile-hero-image"
              style={{display: 'none'}}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Minimalist Design. Maximum Impact.</h2>
          <p className="section-subtitle">Everything you need. Nothing you don't.</p>
        </div>

        <div className="features-grid">
          {[
            { icon: '🧠', title: 'AI That Understands', desc: '24/7 personalized support that learns your patterns and adapts to your journey' },
            { icon: '📊', title: 'Track Progress', desc: 'Visual insights into your triggers, moods, and milestones' },
            { icon: '🎯', title: 'Stay Focused', desc: 'Daily goals and gentle reminders to keep you on track' },
            { icon: '🔒', title: 'Private & Secure', desc: 'Your journey is yours alone. End-to-end encryption' },
            { icon: '💬', title: 'Community Support', desc: 'Connect with others who understand your path' },
            { icon: '⚡', title: 'Instant Insights', desc: 'Real-time analysis and actionable recommendations' }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Full-width Screenshot Gallery */}
        <div className="gallery-section">
          <div className="gallery-container">
            {/* Original set */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={`screenshot-${num}`} className="screenshot-placeholder">
                <div className="screenshot-inner">
                  App Screen {num}
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={`screenshot-dup-${num}`} className="screenshot-placeholder">
                <div className="screenshot-inner">
                  App Screen {num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Revise?</h2>
          <p className="cta-text">Join thousands who've already started their transformation</p>
          <div className="hero-buttons">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="hero-store-link">
              <img 
                src="/apple_store_download_01.webp" 
                alt="Download on App Store" 
                className="hero-apple-button"
              />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="hero-store-link">
              <img 
                src="/android_store_download.png" 
                alt="Get it on Google Play" 
                className="hero-android-button"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Mobile-only Floating CTA */}
      <div className="floating-cta">
        <a href="https://apps.apple.com" className="floating-button">
          Download Now
        </a>
      </div>
    </>
  );
}

// About Page Component
function About() {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1 className="page-title">About Revice</h1>
        <p className="page-text">
          We believe in second chances. In the power to revise your story and release what holds you back.
        </p>
        <p className="page-text">
          Our AI-powered platform combines cutting-edge technology with evidence-based recovery methods to create a personalized companion that truly understands your journey.
        </p>
        <p className="page-text">
          Built by experts in addiction recovery, behavioral health, and artificial intelligence, Revice is more than an app—it's your partner in transformation.
        </p>
        
        <div className="page-download-section">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="/apple_store_download_01.webp" alt="App Store" className="page-apple-button" />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/android_store_download.png" alt="Google Play" className="page-android-button" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Features Page Component
function Features() {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1 className="page-title">Features That Matter</h1>
        
        <div className="features-list">
          {[
            { emoji: '🧠', title: 'Personalized AI Coach', desc: 'Your 24/7 companion that learns your unique patterns, triggers, and motivations to provide support when you need it most.' },
            { emoji: '📊', title: 'Smart Analytics', desc: 'Track your journey with intelligent insights. Visualize progress, identify patterns, and celebrate milestones.' },
            { emoji: '🎯', title: 'Daily Goals & Habits', desc: 'Build lasting change with personalized daily challenges and habit tracking designed for sustainable recovery.' },
            { emoji: '💬', title: 'Safe Community', desc: 'Connect anonymously with others on similar journeys. Share experiences, find support, and inspire each other.' },
            { emoji: '🔔', title: 'Smart Reminders', desc: 'Gentle, timely nudges to keep you on track without being overwhelming. Your recovery, your pace.' },
            { emoji: '🛡️', title: 'Privacy First', desc: 'End-to-end encryption ensures your journey remains private. Your data never leaves your device without permission.' },
          ].map((item, index) => (
            <div key={index} className="feature-list-item">
              <span className="feature-emoji">{item.emoji}</span>
              <div>
                <h3 className="feature-list-title">{item.title}</h3>
                <p className="feature-list-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="page-download-section">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="/apple_store_download_01.webp" alt="App Store" className="page-apple-button" />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/android_store_download.png" alt="Google Play" className="page-android-button" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function Contact() {
  return (
    <div className="page-container">
      <div className="content-section">
        <h1 className="page-title">Let's Connect</h1>
        <p className="page-text">
          Have questions? Need support? We're here for you.
        </p>
        <p className="page-text">
          Email us at <strong>support@revice.ai</strong> or reach out through the app for immediate AI-powered assistance.
        </p>
        <p className="page-text">
          For partnerships and press inquiries: <strong>hello@revice.ai</strong>
        </p>
        
        <div className="page-download-section">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img src="/apple_store_download_01.webp" alt="App Store" className="page-apple-button" />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/android_store_download.png" alt="Google Play" className="page-android-button" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <About />;
      case 'features': return <Features />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      {/* Background Gradient Orbs */}
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>
      <div className="bg-gradient-orb orb-3"></div>
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;