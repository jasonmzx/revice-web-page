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
  
  export default About;