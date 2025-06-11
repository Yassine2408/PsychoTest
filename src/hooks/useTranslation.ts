'use client';

import { useState, useEffect } from 'react';
import { i18n } from '../lib/i18n';

export function useTranslation() {
  const [language, setLanguage] = useState(i18n.getCurrentLanguage());

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail);
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, []);

  const t = (key: string) => {
    return i18n.t(key);
  };

  return { t, language };
} 