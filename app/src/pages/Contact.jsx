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
  
export default Contact;