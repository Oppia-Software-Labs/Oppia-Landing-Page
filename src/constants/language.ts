/**
 * Language constants
 */

export const LANGUAGE_LABELS = {
  es: 'Español',
  en: 'English',
} as const;

export type LanguageLabel = typeof LANGUAGE_LABELS[keyof typeof LANGUAGE_LABELS];

export function getLanguageTexts(locale: 'es' | 'en') {
  return {
    current: LANGUAGE_LABELS[locale],
    opposite: LANGUAGE_LABELS[locale === 'es' ? 'en' : 'es'],
  };
}

