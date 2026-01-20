'use client';

import { useAppStore } from '@/store/store';
import { useTranslations, type Locale } from '@/i18n/i18n';
import { useLocale } from '@/hooks/useLocale';

export function LanguageButton() {
  const locale = useAppStore((state) => state.locale);
  const setLocale = useAppStore((state) => state.setLocale);
  const { t } = useTranslations(locale);
  const { mounted } = useLocale(locale, setLocale);

  const toggleLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  return (
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 rounded-full bg-white/4 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-white/8"
          aria-label={t('navbar.changeLanguage')}
        >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span>{mounted ? locale.toUpperCase() : 'ES'}</span>
    </button>
  );
}

