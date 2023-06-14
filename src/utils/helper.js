// eslint-disable @typescript-eslint/no-explicit-any
export function detectMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'iOS';
  }

  return 'Unknown';
}

// Usage example
const os = detectMobileOperatingSystem();
console.log('Detected OS:', os);