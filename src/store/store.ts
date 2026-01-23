import { create } from 'zustand';
import type { Locale } from '@/i18n/i18n';

interface AppState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  setMenuOpen: (isOpen: boolean) => void;
  faqOpenIndex: number | null;
  setFaqOpenIndex: (index: number | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  locale: 'en',
  setLocale: (locale: Locale) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('oppia-locale', locale);
    }
    set({ locale });
  },
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  setMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
  faqOpenIndex: 0,
  setFaqOpenIndex: (index: number | null) => set({ faqOpenIndex: index }),
}));

if (typeof window !== 'undefined') {
  const savedLocale = localStorage.getItem('oppia-locale') as Locale;
  if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
    useAppStore.getState().setLocale(savedLocale);
  }
}

