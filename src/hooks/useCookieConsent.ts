
import { useState, useEffect } from 'react';

export type ConsentStatus = 'pending' | 'accepted' | 'rejected';

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  // Check localStorage on component mount
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    const savedPreferences = localStorage.getItem('cookie-preferences');
    
    if (savedConsent === 'accepted') {
      setConsentStatus('accepted');
      if (savedPreferences) {
        try {
          const parsedPreferences = JSON.parse(savedPreferences);
          setPreferences(parsedPreferences);
        } catch (e) {
          // If parsing fails, use default preferences
        }
      }
      initializeAnalytics();
    } else if (savedConsent === 'rejected') {
      setConsentStatus('rejected');
    } else {
      // No saved preference, show the banner
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    const updatedPreferences = {
      ...preferences,
      analytics: true
    };
    
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(updatedPreferences));
    
    setConsentStatus('accepted');
    setPreferences(updatedPreferences);
    setShowBanner(false);
    
    initializeAnalytics();
  };

  const rejectCookies = () => {
    const updatedPreferences = {
      ...preferences,
      analytics: false,
      marketing: false
    };
    
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-preferences', JSON.stringify(updatedPreferences));
    
    setConsentStatus('rejected');
    setPreferences(updatedPreferences);
    setShowBanner(false);
  };

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences };
    setPreferences(updatedPreferences);
    
    // Update consent status based on analytics preference
    if (updatedPreferences.analytics) {
      localStorage.setItem('cookie-consent', 'accepted');
      setConsentStatus('accepted');
      initializeAnalytics();
    } else {
      localStorage.setItem('cookie-consent', 'rejected');
      setConsentStatus('rejected');
    }
    
    localStorage.setItem('cookie-preferences', JSON.stringify(updatedPreferences));
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
    preferences,
    acceptCookies,
    rejectCookies,
    updatePreferences
  };
};
