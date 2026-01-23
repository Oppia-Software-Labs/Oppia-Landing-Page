'use client';

import { OppiaLogo } from '@/components/icons/oppia/OppiaLogo';
import { LanguageButton } from './LanguageButton';
import { DiscoverLink } from './DiscoverLink';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface NavTopBarProps {
  onToggle: () => void;
  isActive: boolean;
}

export function NavTopBar({ onToggle, isActive }: NavTopBarProps) {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const closeMenu = useAppStore((state) => state.closeMenu);
  const { scrollToElement } = useSmoothScroll();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    scrollToElement('#hero', 0);
  };

  return (
    <div className="twostep-nav__top">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }}
        className="twostep-nav__toggle"
        aria-label={isActive ? t('navbar.closeMenu') : t('navbar.menu')}
      >
        <div className="twostep-nav__toggle-bars">
          <div className="twostep-nav__toggle-bar"></div>
          <div className="twostep-nav__toggle-bar"></div>
        </div>
        <span className="twostep-nav__menu-text">{t('navbar.menu')}</span>
      </button>
      <a
        href="#hero"
        onClick={handleLogoClick}
        className="twostep-nav__logo"
      >
        <OppiaLogo width={140} height={46} className="twostep-nav__logo-svg" />
      </a>
      <div className="flex items-center gap-3">
        <DiscoverLink />
        <LanguageButton />
      </div>
      <div className="twostep-nav__top-line"></div>
    </div>
  );
}

