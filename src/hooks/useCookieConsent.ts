
import { useState, useEffect } from 'react';

type ConsentStatus = 'pending' | 'accepted' | 'rejected';

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [showBanner, setShowBanner] = useState(false);

  // Check localStorage on component mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    
    if (savedConsent === 'accepted') {
      setConsentStatus('accepted');
      initializeAnalytics();
    } else if (savedConsent === 'rejected') {
      setConsentStatus('rejected');
    } else {
      // No saved preference, show the banner
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsentStatus('accepted');
    setShowBanner(false);
    initializeAnalytics();
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsentStatus('rejected');
    setShowBanner(false);
  };

  // Placeholder function for analytics initialization
  const initializeAnalytics = () => {
    console.log('Analytics initialized');
    // Here you would normally initialize Google Analytics or other tracking
    // Example:
    // if (typeof window !== 'undefined') {
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(...args: any[]) { window.dataLayer.push(args); }
    //   gtag('js', new Date());
    //   gtag('config', 'G-XXXXXXXXXX');
    // }
  };

  return {
    consentStatus,
    showBanner,
    acceptCookies,
    rejectCookies
  };
};
