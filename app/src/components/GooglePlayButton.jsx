function GooglePlayButton({ variant = 'large', url = 'https://play.google.com/store/apps/details?id=app.revice.app' }) {
  const isSmall = variant === 'small';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={isSmall ? 'download-link' : 'hero-store-link'}
    >
      <img
        src="/android_store_download.png"
        alt="Get it on Google Play"
        className={isSmall ? 'android-button' : 'hero-android-button'}
      />
    </a>
  );
}


export default GooglePlayButton;