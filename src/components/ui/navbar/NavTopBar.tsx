'use client';

import { motion } from 'framer-motion';
import { OppiaLogo } from '@/components/icons/oppia/OppiaLogo';
import { LanguageButton } from './LanguageButton';
import { DiscoverLink } from './DiscoverLink';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { navbarVariants } from '@/animations/navbar';

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
    <motion.div
      className="twostep-nav__top max-[389px]:gap-0.5"
      variants={navbarVariants.topBar}
      initial="hidden"
      animate="show"
    >
      <motion.button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }}
        className="twostep-nav__toggle"
        aria-label={isActive ? t('navbar.closeMenu') : t('navbar.menu')}
        variants={navbarVariants.menuButton}
      >
        <div className="twostep-nav__toggle-bars">
          <div className="twostep-nav__toggle-bar"></div>
          <div className="twostep-nav__toggle-bar"></div>
        </div>
        <span className="twostep-nav__menu-text">{t('navbar.menu')}</span>
      </motion.button>
      <motion.a
        href="#hero"
        onClick={handleLogoClick}
        className="twostep-nav__logo"
        variants={navbarVariants.logo}
      >
        <OppiaLogo width={120} height={40} className="twostep-nav__logo-svg max-sm:!w-[90px] max-sm:!h-[28px]" />
      </motion.a>
      <motion.div
        className="flex items-center gap-3 max-[389px]:gap-1.5"
        variants={navbarVariants.topButtons}
      >
        <div className="hidden sm:block">
          <DiscoverLink />
        </div>
        <div className="hidden sm:block">
          <LanguageButton />
        </div>
      </motion.div>
      <div className="twostep-nav__top-line"></div>
    </motion.div>
  );
}

