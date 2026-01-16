'use client';

import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MenuButton({ isOpen, onToggle }: MenuButtonProps) {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 rounded-full bg-white/4 px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-white/8"
      aria-label={isOpen ? t('navbar.closeMenu') : t('navbar.menu')}
      aria-expanded={isOpen}
    >
      <div className="relative h-5 w-5">
        <svg
          className={`absolute h-5 w-5 transition-opacity duration-300 ease-out ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <svg
          className={`absolute h-5 w-5 transition-opacity duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <span className="transition-opacity duration-300 ease-out">
        {isOpen ? t('navbar.closeMenu') : t('navbar.menu')}
      </span>
    </button>
  );
}

