import Footer from '../components/Footer';
import personalTrainerIcon from '../assets/personal-trainer.svg';
import analyticsIcon from '../assets/analytics.svg';
import dailyGoalIcon from '../assets/daily-goal.svg';
import safeSpaceIcon from '../assets/safe-space.svg';
import reminderBellIcon from '../assets/reminder-bell.svg';
import privacyIcon from '../assets/privacy.svg';

function Features() {
    return (
      <>
      <div className="page-container">
        <div className="content-section">
          <h1 className="page-title">Features That Matter</h1>
          
          <div className="feature-list">
            {[
              { emoji: personalTrainerIcon, title: 'Personalized Recovery', desc: 'Your 24/7 companion that learns your unique patterns, triggers, and motivations to provide support when you need it most.' },
              { emoji: analyticsIcon, title: 'Smart Analytics', desc: 'Track your journey with intelligent insights. Visualize progress, identify patterns, and celebrate milestones.' },
              { emoji: dailyGoalIcon, title: 'Daily Goals & Habits', desc: 'Build lasting change with personalized daily challenges and habit tracking designed for sustainable recovery.' },
              { emoji: safeSpaceIcon, title: 'Safe Community', desc: 'Connect anonymously with others on similar journeys. Share experiences, find support, and inspire each other.' },
              { emoji: reminderBellIcon, title: 'Smart Reminders', desc: 'Gentle, timely nudges to keep you on track without being overwhelming. Your recovery, your pace.' },
              { emoji: privacyIcon, title: 'Privacy First', desc: 'End-to-end encryption ensures your journey remains private. Your data never leaves your device without permission.' },
            ].map((item, index) => (
              <div key={index} className="feature-list-item">
                <span className="feature-emoji">
                  <img src={item.emoji}/>
                </span>
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