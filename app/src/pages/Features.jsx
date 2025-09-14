import Footer from '../components/Footer';

function Features() {
    return (
      <>
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
          
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  
  export default Features;