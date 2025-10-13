function AppStoreButton({ variant = 'large', url = 'https://apps.apple.com/us/app/revice-quit-stay-sober/id6746642680' }) {
  const isSmall = variant === 'small';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={isSmall ? 'download-link' : 'hero-store-link'}
    >
      <img
        src="/apple_store_download_01.webp"
        alt="Download on App Store"
        className={isSmall ? 'apple-button' : 'hero-apple-button'}
      />
    </a>
  );
}

export default AppStoreButton;