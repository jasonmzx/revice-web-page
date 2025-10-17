import { detectPlatform, getDownloadUrl } from '../utils/platformDetection';

function SmartDownloadButton({ className = 'floating-button', children = 'Download Now' }) {
  const handleClick = (e) => {
    e.preventDefault();
    const platform = detectPlatform();
    const downloadUrl = getDownloadUrl(platform);
    window.open(downloadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default SmartDownloadButton;