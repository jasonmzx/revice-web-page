export const detectPlatform = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }

  if (/android/i.test(userAgent)) {
    return 'android';
  }

  if (/Macintosh|Mac OS X/.test(userAgent)) {
    return 'ios';
  }

  return 'android';
};

export const getDownloadUrl = (platform) => {
  const urls = {
    ios: 'https://apps.apple.com/us/app/revice-quit-stay-sober/id6746642680',
    android: 'https://play.google.com/store/apps/details?id=app.revice.app'
  };

  return urls[platform] || urls.android;
};