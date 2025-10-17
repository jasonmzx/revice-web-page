import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Scroll progress indicator
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      const progressBar = document.getElementById('scrollProgress');
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-indicator">
        <div className="scroll-progress" id="scrollProgress"></div>
      </div>
      
      <div className="page-container">
        <div className="policy-content">
          <div className="page-header">
            <h1 className="page-title">Privacy Policy</h1>
            <p className="policy-date">Last Updated: October 16, 2025</p>
          </div>
          
          <section className="policy-section">
            <p className="page-text">
              At REVICE, we understand that privacy is especially important when you're in recovery. This Privacy Policy explains how we handle your information with the care and respect you deserve. We've written this in plain language because you have the right to understand exactly what happens to your data.
            </p>
            
            <div className="alert-box">
              <p><strong>IMPORTANT NOTICE:</strong> Addiction recovery information receives special federal protection under 42 CFR Part 2. We comply with these enhanced protections, which are stricter than standard health privacy laws.</p>
            </div>
          </section>

          <section className="policy-section">
  <h2 className="policy-heading">1. Information We Collect</h2>

  <h3 className="policy-subheading">1.1 Information You Provide</h3>

  <h4 className="policy-subsubheading">Account Basics:</h4>
  <ul className="policy-list">
    <li>Email address (required)</li>
    <li>Password (stored in encrypted form; we cannot access it)</li>
    <li>Display name (optional; you may remain anonymous)</li>
    <li>Age (to verify you are 18+)</li>
  </ul>

  <h4 className="policy-subsubheading">Recovery Information:</h4>
  <ul className="policy-list">
    <li>
      Information related to your recovery journey, which may include the addictions or vices you are working to manage, sobriety date(s), responses to onboarding questions, and your personal motivations or goals for recovery.
    </li>
    <li>
      Religious or spiritual preference (only if you voluntarily provide it). This information is used solely to personalize your experience. Our AI may reference broad principles and themes associated with the preference you provide. It is not intended to deliver doctrinal guidance, factual interpretation, or commentary on religions you have not explicitly selected. REVICE will not use or infer religious information beyond what you choose to share.
    </li>
  </ul>

  <h4 className="policy-subsubheading">Content You Create:</h4>
  <ul className="policy-list">
    <li>Journal entries, savings goals (time/money), step-by-step routines (Habits), and relapse tracking data</li>
    <li>Community posts and comments (if you choose to share)</li>
    <li>Voice notes (transcribed; original audio deleted immediately after transcription; raw transcriptions are not stored)</li>
    <li>Check-in responses and craving session data, along with information generated through other recovery features</li>
  </ul>

  <h3 className="policy-subheading">1.2 Information Collected Automatically</h3>

  <h4 className="policy-subsubheading">Technical Data:</h4>
  <ul className="policy-list">
    <li>Device type and operating system</li>
    <li>App version</li>
    <li>General location (country/state level only, not precise location) for localization purposes</li>
    <li>Crash reports and error logs (no personal content included)</li>
    <li>Feature usage and interaction timestamps (for app improvement)</li>
  </ul>

  <h4 className="policy-subsubheading">What We Do Not Collect:</h4>
  <ul className="policy-list">
    <li>Precise GPS location</li>
    <li>Your phone’s contacts</li>
    <li>Your photos, unless you explicitly upload them</li>
    <li>Data from other apps on your device</li>
    <li>Biometric identifiers</li>
    <li>Information purchased or obtained from data brokers</li>
  </ul>
</section>

<section className="policy-section">
  <h2 className="policy-heading">2. How We Use Your Information</h2>

  <h3 className="policy-subheading">2.1 To Provide and Personalize Recovery Support</h3>
  <ul className="policy-list">
    <li>Deliver AI-powered encouragement tailored to your recovery journey</li>
    <li>Track your progress and milestones</li>
    <li>Provide content aligned with your recovery goals</li>
    <li>Send milestone celebrations and optional check-in reminders</li>
  </ul>

  <h3 className="policy-subheading">2.2 To Maintain a Safe Community</h3>
  <ul className="policy-list">
    <li>Moderate community content for safety and respect</li>
    <li>Detect and prevent harmful, abusive, or triggering content</li>
    <li>Protect vulnerable users from potential exploitation</li>
  </ul>

  <h3 className="policy-subheading">2.3 To Improve REVICE</h3>
  <ul className="policy-list">
    <li>Analyze which features are most effective</li>
    <li>Identify and fix bugs or technical issues</li>
    <li>Develop new tools and support options</li>
    <li>Ensure compatibility across devices and platforms</li>
  </ul>

  <h3 className="policy-subheading">2.4 For Legal and Security Purposes</h3>
  <ul className="policy-list">
    <li>Comply with applicable laws and regulations</li>
    <li>Detect, investigate, and prevent fraud or misuse</li>
    <li>Enforce our Terms of Service and other agreements</li>
  </ul>
</section>


          <section className="policy-section">
            <h2 className="policy-heading">3. Special Protections for Addiction Recovery Data (42 CFR Part 2) - US Users Only</h2>
            
            <p className="page-text">Your addiction recovery information is protected by federal law (42 CFR Part 2). This means:</p>
            
            <ul className="policy-list">
              <li>We cannot share your substance use disorder information without your explicit written consent, except in very limited circumstances</li>
              <li>Law enforcement cannot access your recovery data without a court order meeting specific requirements</li>
            </ul>
            
            <div className="alert-box">
              <p><strong>Prohibition Statement:</strong> This information has been disclosed to you from records protected by federal confidentiality rules (42 CFR Part 2). The federal rules prohibit you from making any further disclosure of information in this record that identifies a patient as having or having had a substance use disorder either directly, by reference to publicly available information, or through verification of such identification by another person unless further disclosure is expressly permitted by the written consent of the individual whose information is being disclosed or as otherwise permitted by 42 CFR Part 2.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">4. How We Share Your Information</h2>
            
            <h3 className="policy-subheading">4.1 We NEVER Sell Your Data</h3>
            <p className="page-text">Period. Your recovery journey is not for sale.</p>
            
            <h3 className="policy-subheading">4.2 Essential Service Providers Only</h3>
            <p className="page-text">We share limited data only with carefully vetted providers who:</p>
            <ul className="policy-list">
              <li><strong>Cloud Hosting (OVH):</strong> Stores encrypted data</li>
              <li><strong>Secure Sign-In with Google and Apple:</strong> Authenticates your account (no personal data shared)</li>
              <li><strong>Email Service (SendGrid):</strong> Sends account emails (no recovery details included)</li>
              <li><strong>AI Processing (OpenAI):</strong> Generates personalized content (context only, no identifying info)</li>
              <li><strong>Payment Processor (Google Play & App Store):</strong> Handles subscription payments (no recovery data shared)</li>
            </ul>
            <p className="page-text">Each provider signs strict agreements protecting your data and limiting use to providing services to REVICE only.</p>
            
            <h3 className="policy-subheading">4.3 What We DON'T Do:</h3>
            <ul className="policy-list">
              <li>NO advertising networks or data brokers</li>
              <li>NO social media pixels or tracking</li>
              <li>NO sharing with insurance companies</li>
              <li>NO selling or renting your information</li>
              <li>NO sharing recovery data without explicit consent</li>
            </ul>
            
            <h3 className="policy-subheading">4.4 Legal Disclosures</h3>
            <p className="page-text">We may disclose information only if required by:</p>
            <ul className="policy-list">
              <li>Valid court order meeting 42 CFR Part 2 requirements</li>
              <li>Medical emergency (to medical personnel only)</li>
              <li>Research (de-identified data only, with IRB approval)</li>
              <li>Audit or evaluation (by qualified personnel under strict confidentiality)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">5. Your Privacy Rights</h2>
            
            <h3 className="policy-subheading">5.1 Universal Rights (Available to Everyone)</h3>
            <ul className="policy-list">
              <li><strong>Access:</strong> See what information we have about you</li>
              <li><strong>Correction:</strong> Fix incorrect information</li>
              <li><strong>Deletion:</strong> Delete your account and data</li>
              <li><strong>Portability:</strong> Download your data in a readable format</li>
              <li><strong>Consent Withdrawal:</strong> Change your privacy choices anytime</li>
            </ul>
            
            <h3 className="policy-subheading">5.2 State-Specific Rights</h3>
            
            <h4 className="policy-subsubheading">California Residents (CCPA/CPRA):</h4>
            <ul className="policy-list">
              <li>Right to know categories and purposes of data collection</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of "sales" (we don't sell data)</li>
              <li>Right to limit use of sensitive information</li>
              <li>Right to non-discrimination for exercising rights</li>
            </ul>
            
            <h4 className="policy-subsubheading">Washington Residents (My Health My Data Act):</h4>
            <ul className="policy-list">
              <li>Separate consent required for collecting vs. sharing health data</li>
              <li>Right to withdraw consent for specific data uses</li>
              <li>Right to deletion within 30 days</li>
              <li>Right to know all third parties receiving data</li>
            </ul>
            
            <h4 className="policy-subsubheading">Colorado, Connecticut, Utah, Virginia Residents:</h4>
            <ul className="policy-list">
              <li>Right to opt-out of targeted advertising (we don't do this)</li>
              <li>Right to opt-out of profiling</li>
              <li>Right to appeal privacy rights decisions</li>
            </ul>
            
            <h4 className="policy-subsubheading">European Residents (GDPR):</h4>
            <p className="page-text">All rights listed above plus:</p>
            <ul className="policy-list">
              <li>Right to object to processing</li>
              <li>Right to restrict processing</li>
              <li>Right to lodge complaints with supervisory authorities</li>
            </ul>
            
            <p className="page-text">To exercise any right, email <a href="mailto:privacy@revice.app" className="contact-link">privacy@revice.app</a>. We'll respond within 30 days (45 for complex requests).</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">6. Data Security</h2>
            
            <h3 className="policy-subheading">6.1 How We Protect Your Data</h3>
            <ul className="policy-list">
              <li><strong>Encryption:</strong> All data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
              <li><strong>Access Controls:</strong> Limited employee access on need-to-know basis</li>
              <li><strong>Security Audits:</strong> Regular security assessments and penetration testing</li>
              <li><strong>Incident Response:</strong> 72-hour breach notification commitment</li>
              <li><strong>Zero-Knowledge Architecture:</strong> Even we can't see certain sensitive data</li>
            </ul>
            
            <h3 className="policy-subheading">6.2 Your Security Responsibilities</h3>
            <ul className="policy-list">
              <li>Use a strong, unique password</li>
              <li>Don't share your account credentials</li>
              <li>Log out on shared devices</li>
              <li>Keep your app updated</li>
              <li>Report suspicious activity immediately</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">7. Children's Privacy</h2>
            <div className="alert-box">
              <p>REVICE is strictly for users 18 and older. We don't knowingly collect data from anyone under 18. If we discover we have, we'll immediately delete it and terminate the account. Parents: if your child has created an account, contact us immediately at <a href="mailto:privacy@revice.app" className="contact-link">privacy@revice.app</a>.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">8. Data Retention and Deletion</h2>
            
            <h3 className="policy-subheading">8.1 Active Accounts</h3>
            <p className="page-text">We keep your data while your account is active and you're using REVICE.</p>
            
            <h3 className="policy-subheading">8.2 Account Deletion</h3>
            <p className="page-text">When you delete your account:</p>
            <ul className="policy-list">
              <li>Personal data deleted within 30 days</li>
              <li>Some data retained up to 90 days in backups</li>
              <li>Anonymized analytics data may be kept</li>
              <li>Legal obligations may require longer retention</li>
            </ul>
            
            <h3 className="policy-subheading">8.3 Automatic Deletion</h3>
            <ul className="policy-list">
              <li><strong>Voice recordings:</strong> Deleted immediately after transcription</li>
              <li><strong>Unused accounts:</strong> Notified after 12 months of inactivity, deleted after 18 months</li>
              <li><strong>Payment information:</strong> Deleted 60 days after subscription ends</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">9. International Data Transfers</h2>
            
            <h3 className="policy-subheading">9.1 Data Location</h3>
            <p className="page-text">Your data is primarily stored in the United States. By using REVICE, you consent to transfer and processing in the US.</p>
            
            <h3 className="policy-subheading">9.2 International User Protections</h3>
            <p className="page-text">For users outside the US:</p>
            <ul className="policy-list">
              <li>We use Standard Contractual Clauses for EU/UK users</li>
              <li>We implement appropriate safeguards for all international transfers</li>
              <li>You maintain all rights under your local privacy laws</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">10. Cookies and Tracking</h2>
            
            <h3 className="policy-subheading">10.1 What We Use</h3>
            <ul className="policy-list">
              <li><strong>Essential Cookies Only:</strong> For login and security</li>
              <li><strong>No Advertising Cookies:</strong> We don't track you across the web</li>
              <li><strong>No Social Media Pixels:</strong> No Facebook, TikTok, or other tracking pixels</li>
              <li><strong>Privacy-Focused Analytics:</strong> Self-hosted, no third-party tracking</li>
            </ul>
            
            <h3 className="policy-subheading">10.2 Your Controls</h3>
            <p className="page-text">You can disable cookies in your browser, but this may affect app functionality.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">11. AI and Automated Processing</h2>
            
            <h3 className="policy-subheading">11.1 How AI Uses Your Data</h3>
            <ul className="policy-list">
              <li>Your recovery context helps personalize AI responses</li>
              <li>AI doesn't know your identity, only your recovery context</li>
              <li>No fully automated decision-making that significantly affects you</li>
              <li>You can opt-out of AI features while still using REVICE</li>
            </ul>
            
            <h3 className="policy-subheading">11.2 Human Oversight</h3>
            <p className="page-text">All significant decisions maintain human review. AI is a tool, not a decision-maker.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">12. Changes to This Policy</h2>
            
            <h3 className="policy-subheading">12.1 Update Notifications</h3>
            <p className="page-text">We'll notify you of material changes via:</p>
            <ul className="policy-list">
              <li>In-app notification</li>
              <li>Email to your registered address</li>
              <li>30-day notice before changes take effect</li>
            </ul>
            
            <h3 className="policy-subheading">12.2 Consent to Changes</h3>
            <p className="page-text">Continued use after notice period means you accept the updates. If you disagree, you can download your data and delete your account.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">13. Contact Us</h2>
            
            <div className="contact-info">
              <p><strong>Privacy Questions:</strong> <a href="mailto:privacy@revice.app" className="contact-link">privacy@revice.app</a></p>
              <p><strong>Data Rights Requests:</strong> <a href="mailto:privacy@revice.app" className="contact-link">privacy@revice.app</a></p>
              <p><strong>Security Concerns:</strong> <a href="mailto:security@revice.app" className="contact-link">security@revice.app</a></p>
              <p><strong>General Support:</strong> <a href="mailto:support@revice.app" className="contact-link">support@revice.app</a></p>
              
              <div className="contact-address">
                <p><strong>Data Protection Officer:</strong></p>
                <p>Atevo Inc.</p>
                <p>Attn: Privacy Officer</p>
                <p>[Address to be added]</p>
              </div>
              
              <p><strong>Response Timeline:</strong></p>
              <ul className="policy-list">
                <li>Acknowledgment: Within 3 business days</li>
                <li>Resolution: Within 30 days (45 for complex requests)</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">14. Special Notice for Vulnerable Populations</h2>
            
            <p className="page-text">We recognize that individuals in recovery may be in vulnerable situations. If you're concerned about:</p>
            <ul className="policy-list">
              <li>Someone else accessing your account</li>
              <li>Privacy in domestic situations</li>
              <li>Employer or insurance discovery</li>
            </ul>
            <p className="page-text">Contact <a href="mailto:privacy@revice.app" className="contact-link">privacy@revice.app</a> for additional privacy protections and guidance.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">15. Your Privacy Pledge</h2>
            
            <p className="page-text">We promise to:</p>
            <ul className="policy-list">
              <li>Never sell your data</li>
              <li>Never share without explicit consent (except legal requirements)</li>
              <li>Always be transparent about data use</li>
              <li>Respect your recovery journey's privacy</li>
              <li>Continuously improve our privacy protections</li>
            </ul>
            
            <div className="alert-box">
              <p><strong>Your recovery is sacred. Your privacy is paramount. Your trust is everything.</strong></p>
            </div>
          </section>

          <div className="section-divider"></div>

          <footer className="policy-footer">
            <Link to="/" className="policy-back-link">← Back to Home</Link>
            <Link to="/terms-of-service" className="policy-back-link">Terms of Service</Link>
          </footer>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;