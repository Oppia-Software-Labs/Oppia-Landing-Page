'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useLocale } from '@/hooks/useLocale';
import { getLanguageTexts } from '@/constants/language';
import { LanguageIcon } from './LanguageIcon';

export function LanguageButton() {
  const locale = useAppStore((state) => state.locale);
  const setLocale = useAppStore((state) => state.setLocale);
  const { t } = useTranslations(locale);
  const { mounted } = useLocale(locale, setLocale);

  const toggleLanguage = () => {
    setLocale(locale === 'es' ? 'en' : 'es');
  };

  const currentLocale = mounted ? locale : 'es';
  const { current, opposite } = getLanguageTexts(currentLocale);

  return (
    <button
      onClick={toggleLanguage}
      className="btn-slanted"
      aria-label={t('navbar.changeLanguage')}
    >
      <div className="btn-slanted-label__wrap">
        <span className="btn-slanted-label btn-slanted-label--current">
          <LanguageIcon />
          {current}
        </span>
        <span
          aria-hidden="true"
          className="btn-slanted-label btn-slanted-label--opposite"
        >
          <LanguageIcon />
          {opposite}
        </span>
      </div>
      <div className="btn-slanted-bg"></div>
    </button>
  );
}

