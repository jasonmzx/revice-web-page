import { useState, useEffect } from 'react';

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

export default Home;