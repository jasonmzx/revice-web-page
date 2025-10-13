import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import AppStoreButton from '../components/AppStoreButton';
import GooglePlayButton from '../components/GooglePlayButton';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-container">
          {/* Hero Content */}
          <div className="hero-content">
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
              <AppStoreButton variant="large" />
              <GooglePlayButton variant="large" />
            </div>
          </div>

          {/* Hero Image - Desktop side-by-side, Mobile stacked */}
          <div className="hero-image">
            <img
              src="/dashboard_0.png"
              alt="Revice App Interface"
              className="hero-app-image"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Revice Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">Why Choose Revice?</h2>
          <p className="section-subtitle">Revice is the most personalized addiction recovery & sobriety app</p>
        </div>

        <div className="features-cards">
          {[
            {
              icon: '🤖',
              title: 'AI-Powered Recovery',
              desc: 'Advanced AI learns your patterns and provides personalized support 24/7 to help you stay sober'
            },
            {
              icon: '📊',
              title: 'Smart Progress Tracking',
              desc: 'Track your sobriety journey with intelligent insights into triggers, moods, and milestones'
            },
            {
              icon: '🎯',
              title: 'Personalized Support',
              desc: 'Every person\'s recovery is unique. Get customized goals, reminders, and strategies that work for you'
            }
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-circle">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Revise?</h2>
          <p className="cta-text">Join thousands who've already started their transformation</p>
          <div className="hero-buttons">
            <AppStoreButton variant="large" />
            <GooglePlayButton variant="large" />
          </div>
        </div>
      </section>

      {/* Mobile-only Floating CTA */}
      <div className="floating-cta">
        <a href="https://apps.apple.com" className="floating-button">
          Download Now
        </a>
      </div>
      <Footer/>
    </>
  );
}

export default Home;