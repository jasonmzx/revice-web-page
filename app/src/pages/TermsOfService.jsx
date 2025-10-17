import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function TermsOfService() {
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
            <h1 className="page-title">Terms of Service</h1>
            <p className="policy-date">Last Updated: September 5, 2025</p>
          </div>
          
          <section className="policy-section">
            <p className="page-text">
              Welcome to REVICE. These Terms of Service ("Terms") form a legally binding agreement between you and Atevo Inc. ("we," "us," "our") governing your use of the REVICE addiction recovery mobile application, website, and related services (collectively, the "Service").
            </p>
            <div className="alert-box">
              <p><strong>IMPORTANT:</strong> REVICE serves individuals in addiction recovery, people in this state are usually vulnerable. We've designed these Terms with your wellbeing in mind.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">1. Acceptance and Eligibility</h2>
            
            <h3 className="policy-subheading">1.1 Binding Agreement</h3>
            <p className="page-text">By accessing or using REVICE, you acknowledge that you've read, understood, and agree to these Terms. If you don't agree, please don't use our Service.</p>
            
            <h3 className="policy-subheading">1.2 Age Requirements</h3>
            <p className="page-text">You must be at least 18 years old to use REVICE. We do not knowingly collect information from anyone under 18. If we discover we've collected data from a minor, we'll promptly delete it and terminate the account.</p>
            
            <h3 className="policy-subheading">1.3 Legal Capacity</h3>
            <p className="page-text">You represent that you have the legal capacity to enter into these Terms. If you're using REVICE while experiencing cognitive impairment that affects decision-making, we recommend reviewing these Terms with a trusted support person.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">2. Critical Health and Safety Information</h2>
            
            <h3 className="policy-subheading">2.1 Not a Medical Service</h3>
            <div className="alert-box">
              <p>REVICE is an educational and peer support tool only. We are NOT:</p>
              <ul className="policy-list">
                <li>A substitute for professional medical, psychiatric, or therapeutic treatment</li>
                <li>A licensed healthcare provider</li>
                <li>A crisis intervention service</li>
                <li>An emergency response system</li>
              </ul>
              <p>Always consult qualified healthcare professionals for diagnosis, treatment, or medical advice.</p>
            </div>
            
            <h3 className="policy-subheading">2.2 No Guaranteed Outcomes</h3>
            <p className="page-text">Recovery is deeply personal. We make no guarantees about sobriety, relapse prevention, or specific recovery outcomes. Any statistics or success stories shared are for informational purposes only and don't predict your individual results.</p>
            
            <h3 className="policy-subheading">2.3 Crisis Situations</h3>
            <div className="alert-box">
              <p><strong>REVICE is not equipped to handle emergencies.</strong> If you're in crisis, experiencing a medical emergency, or having thoughts of self-harm, immediately contact emergency services or visit our Support page for crisis resources. Our app includes crisis resource links, but we cannot guarantee real-time crisis intervention.</p>
            </div>
            
            <h3 className="policy-subheading">2.4 Your Responsibility and Autonomy</h3>
            <p className="page-text">You maintain full responsibility for your recovery decisions. REVICE provides tools and support, but you're the expert on your own journey. Never rely solely on our Service for recovery decisions.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">3. AI Features - Transparency and Limitations</h2>
            
            <h3 className="policy-subheading">3.1 How Our AI Works</h3>
            <p className="page-text">REVICE uses artificial intelligence models (currently OpenAI's GPT-4 and GPT-5) to generate personalized content. Here's what you need to know:</p>
            <ul className="policy-list">
              <li>AI responses are generated based on patterns in training data, not clinical expertise</li>
              <li>Responses may contain errors, inconsistencies, or inappropriate content ("hallucinations")</li>
              <li>AI has no memory of you outside each conversation session</li>
              <li>All AI interactions are clearly labeled</li>
            </ul>
            
            <h3 className="policy-subheading">3.2 Human Oversight</h3>
            <p className="page-text">While AI helps personalize your experience, critical features maintain human oversight. Report any concerning AI responses to support@revice.app.</p>
            
            <h3 className="policy-subheading">3.3 No Professional Relationship</h3>
            <p className="page-text">AI features, including our recovery coach chatbot, do NOT create any professional therapeutic, medical, or counseling relationship. They're supportive tools, not healthcare providers.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">4. Your Account and Data Security</h2>
            
            <h3 className="policy-subheading">4.1 Account Accuracy</h3>
            <p className="page-text">You agree to provide accurate, current information and update it as needed. False information may result in account termination.</p>
            
            <h3 className="policy-subheading">4.2 Account Security</h3>
            <p className="page-text">You're responsible for:</p>
            <ul className="policy-list">
              <li>Maintaining confidentiality of your login credentials</li>
              <li>All activities under your account</li>
              <li>Immediately notifying us of unauthorized access</li>
              <li>Not sharing your account with others</li>
            </ul>
            
            <h3 className="policy-subheading">4.3 Account Recovery</h3>
            <p className="page-text">We'll never ask for your password via email or message. If you forget your password, use only the official reset process in the app.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">5. Subscription and Payment Terms</h2>
            
            <h3 className="policy-subheading">5.1 Transparent Pricing</h3>
            <p className="page-text">All fees are clearly displayed before purchase. We don't hide costs or use deceptive pricing.</p>
            
            <h3 className="policy-subheading">5.2 Auto-Renewal Notice</h3>
            <p className="page-text">Subscriptions automatically renew unless canceled. We'll send reminder emails 3 days before renewal for monthly plans and 7 days for annual plans.</p>
            
            <h3 className="policy-subheading">5.3 Easy Cancellation - "Click to Cancel"</h3>
            <p className="page-text">You can cancel your subscription anytime directly in the app with a single click - same place, same method as you subscribed. No phone calls, no hoops, no guilt. Cancellation is effective at the end of your current billing period.</p>
            
            <h3 className="policy-subheading">5.4 Refund Policy</h3>
            <ul className="policy-list">
              <li>First 14 days: Full refund available for any reason</li>
              <li>After 14 days: Refunds at our discretion or as required by law</li>
              <li>Refunds for annual plans: Pro-rated for unused months</li>
            </ul>
            
            <h3 className="policy-subheading">5.5 Free Trial Conversion</h3>
            <p className="page-text">If we offer a free trial, we'll clearly notify you 3 days before it converts to paid. You can cancel anytime during the trial without charge.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">6. Community Guidelines and Safety</h2>
            
            <h3 className="policy-subheading">6.1 Community Standards</h3>
            <p className="page-text">Our community is built on mutual support and respect. You agree to:</p>
            <ul className="policy-list">
              <li>Support others without judgment</li>
              <li>Respect diverse recovery paths</li>
              <li>Maintain confidentiality of others' shares</li>
              <li>Use trigger warnings for sensitive content</li>
              <li>Never promote substance use or harmful behaviors</li>
            </ul>
            
            <h3 className="policy-subheading">6.2 Prohibited Community Behavior</h3>
            <p className="page-text">The following will result in immediate suspension:</p>
            <ul className="policy-list">
              <li>Sharing or promoting substances, including alcohol or drugs</li>
              <li>Harassment, bullying, or shaming</li>
              <li>Predatory behavior toward vulnerable members</li>
              <li>Impersonating professionals or giving medical advice</li>
              <li>Spam or commercial solicitation</li>
              <li>Sharing others' personal information</li>
            </ul>
            
            <h3 className="policy-subheading">6.3 Peer Support vs. Professional Advice</h3>
            <p className="page-text">Community features provide peer support only. Members cannot and should not provide medical, legal, or professional advice. We're all fellow travelers, not experts.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">7. Prohibited Uses of Service</h2>
            <p className="page-text">You agree NOT to:</p>
            <ul className="policy-list">
              <li>Use REVICE for any unlawful purpose</li>
              <li>Attempt to harm, exploit, or take advantage of other users</li>
              <li>Create multiple accounts to evade restrictions</li>
              <li>Reverse engineer or extract our source code</li>
              <li>Interfere with or disrupt Service operation</li>
              <li>Use automated systems to access the Service</li>
              <li>Upload malware or harmful code</li>
              <li>Violate others' privacy or intellectual property rights</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">8. Content and Intellectual Property</h2>
            
            <h3 className="policy-subheading">8.1 Your Content Rights</h3>
            <p className="page-text">You retain ownership of content you create. By posting, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content within the Service. This license ends when you delete your content, except for content you've shared publicly that others have engaged with.</p>
            
            <h3 className="policy-subheading">8.2 Our Intellectual Property</h3>
            <p className="page-text">REVICE's design, features, and content are protected by intellectual property laws. You may not copy, modify, or distribute our proprietary content without permission.</p>
            
            <h3 className="policy-subheading">8.3 Feedback and Suggestions</h3>
            <p className="page-text">Any feedback or feature suggestions you provide become our property and may be used without compensation or attribution.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">9. Third-Party Services and Links</h2>
            
            <h3 className="policy-subheading">9.1 External Resources</h3>
            <p className="page-text">REVICE may link to third-party resources, treatment centers, or support services. We don't control or endorse these external sites and aren't responsible for their content or practices.</p>
            
            <h3 className="policy-subheading">9.2 Third-Party Integrations</h3>
            <p className="page-text">If you connect third-party services (like health apps), you're subject to their terms and privacy policies in addition to ours.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">10. Disclaimers and Liability Limitations</h2>
            
            <h3 className="policy-subheading">10.1 Service Provided "As Is"</h3>
            <p className="page-text">REVICE is provided "AS IS" and "AS AVAILABLE." We make no warranties, express or implied, about the Service's operation, accuracy, or fitness for any particular purpose.</p>
            
            <h3 className="policy-subheading">10.2 No Health Warranties</h3>
            <p className="page-text">We specifically disclaim any warranties regarding health outcomes, recovery success, or medical accuracy. The Service is not a replacement for professional treatment.</p>
            
            <h3 className="policy-subheading">10.3 Limitation of Liability</h3>
            <p className="page-text">To the maximum extent permitted by law:</p>
            <ul className="policy-list">
              <li>We're not liable for indirect, incidental, consequential, or punitive damages</li>
              <li>We're not liable for lost profits, data loss, or emotional distress</li>
              <li>Our total liability is limited to the amount you paid us in the 12 months before any claim</li>
            </ul>
            
            <h3 className="policy-subheading">10.4 State-Specific Rights</h3>
            <p className="page-text">Some states don't allow certain liability limitations. Your rights may vary based on your location.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">11. Indemnification</h2>
            <p className="page-text">You agree to defend, indemnify, and hold harmless Atevo Inc., its officers, directors, employees, and partners from any claims, damages, or expenses arising from:</p>
            <ul className="policy-list">
              <li>Your violation of these Terms</li>
              <li>Your use of the Service</li>
              <li>Content you post</li>
              <li>Your violation of any rights of another party</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">12. Dispute Resolution and Arbitration</h2>
            
            <h3 className="policy-subheading">12.1 Informal Resolution First</h3>
            <p className="page-text">Before formal proceedings, you agree to attempt resolution by contacting legal@revice.app. Most issues can be resolved this way.</p>
            
            <h3 className="policy-subheading">12.2 Binding Arbitration</h3>
            <p className="page-text">If we can't resolve informally, disputes will be settled through binding arbitration under JAMS rules, except where prohibited by law.</p>
            
            <h3 className="policy-subheading">12.3 Class Action Waiver</h3>
            <p className="page-text">You agree to resolve disputes individually, not as part of a class action. If this waiver is found unenforceable, the entire arbitration provision becomes void.</p>
            
            <h3 className="policy-subheading">12.4 Mass Arbitration Protection</h3>
            <p className="page-text">If 25 or more similar arbitration demands are filed, we'll use bellwether proceedings to efficiently resolve claims. First 10 cases will be selected (5 by each party) to proceed initially.</p>
            
            <h3 className="policy-subheading">12.5 Opt-Out Right</h3>
            <p className="page-text">You may opt out of arbitration by emailing legal@revice.app within 30 days of first using the Service with subject line "Arbitration Opt-Out."</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">13. Account Termination</h2>
            
            <h3 className="policy-subheading">13.1 Your Right to Leave</h3>
            <p className="page-text">You can stop using Revice and delete your account anytime through app settings. We'll process deletion within 30 days and remove your data from our active systems.</p>
            
            <h3 className="policy-subheading">13.2 Our Termination Rights</h3>
            <p className="page-text">We may suspend or terminate your account for Terms violations or to protect the community. We'll provide notice unless doing so would compromise safety or violate law.</p>
            
            <h3 className="policy-subheading">13.3 Effect of Termination</h3>
            <p className="page-text">Upon termination:</p>
            <ul className="policy-list">
              <li>Your access ends immediately</li>
              <li>We'll delete your personal data per our Privacy Policy</li>
              <li>Some anonymized data may be retained for legal or analytical purposes</li>
              <li>Content you've shared publicly may remain if others have engaged with it</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">14. Changes to Terms</h2>
            
            <h3 className="policy-subheading">14.1 Update Notifications</h3>
            <p className="page-text">We may update these Terms as laws and our Service evolve. We'll notify you of material changes via email or in-app notice at least 7 days before they take effect.</p>
            
            <h3 className="policy-subheading">14.2 Continued Use</h3>
            <p className="page-text">Using REVICE after Terms updates means you accept the changes. If you disagree, please stop using the Service and delete your account.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">15. Legal Compliance and Governing Law</h2>
            
            <h3 className="policy-subheading">15.1 Governing Law</h3>
            <p className="page-text">These Terms are governed by Delaware law, without regard to conflict of law principles.</p>
            
            <h3 className="policy-subheading">15.2 Compliance with Laws</h3>
            <p className="page-text">You agree to comply with all applicable laws when using REVICE, including those related to privacy, data protection, and healthcare information.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">16. Miscellaneous Provisions</h2>
            
            <h3 className="policy-subheading">16.1 Entire Agreement</h3>
            <p className="page-text">These Terms and our Privacy Policy constitute the complete agreement between us, superseding any prior agreements.</p>
            
            <h3 className="policy-subheading">16.2 Severability</h3>
            <p className="page-text">If any provision is found unenforceable, the rest remains in effect. We'll replace the invalid provision with an enforceable one that closely matches the original intent.</p>
            
            <h3 className="policy-subheading">16.3 No Waiver</h3>
            <p className="page-text">Our failure to enforce any provision doesn't waive our right to enforce it later.</p>
            
            <h3 className="policy-subheading">16.4 Assignment</h3>
            <p className="page-text">You can't assign these Terms without our consent. We may assign them in connection with a merger, acquisition, or sale of assets.</p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">17. Contact Information</h2>
            <div className="contact-info">
              <p><strong>For legal matters:</strong> <a href="mailto:help@revice.app" className="contact-link">help@revice.app</a></p>
              <p><strong>For support:</strong> <a href="mailto:help@revice.app" className="contact-link">help@revice.app</a></p>
              <br />
              <p><strong>Atevo Inc.</strong></p>
              <p>103-2727 Steeles Ave W</p>
              <p>Toronto, ON, M3J3G9</p>
              <p>Canada</p>
            </div>
          </section>

          <footer className="policy-footer">
            <Link to="/" className="policy-back-link">← Back to Home</Link>
            <Link to="/privacy-policy" className="policy-back-link">Privacy Policy</Link>
          </footer>
        </div>
      </div>
    </>
  );
}

export default TermsOfService;