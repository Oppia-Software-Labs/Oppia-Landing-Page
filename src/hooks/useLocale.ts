import { useState, useEffect } from 'react';
import type { Locale } from '@/i18n/i18n';

export function useLocale(
  locale: Locale,
  setLocale: (locale: Locale) => void
) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('oppia-locale') as Locale;
      if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
        setLocale(savedLocale);
      }
    }
  }, [setLocale]);

  return { mounted };
}

