'use client';

import { useEffect, useRef } from 'react';
import { useAppStore } from '@/store/store';
import { NavTopBar } from './NavTopBar';
import { NavMenuContent } from './NavMenuContent';
import { NAV_STATUS } from '@/constants/navbar';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import type { NavStatus } from '@/constants/navbar';

export function TwoStepNav() {
  const navRef = useRef<HTMLElement>(null);
  const isMenuOpen = useAppStore((state) => state.isMenuOpen);
  const closeMenu = useAppStore((state) => state.closeMenu);
  const { scrollToElement } = useSmoothScroll();

  const setNavStatus = (status: NavStatus) => {
    if (navRef.current) {
      navRef.current.setAttribute('data-nav-status', status);
    }
  };

  const isActive = () => {
    return navRef.current?.getAttribute('data-nav-status') === NAV_STATUS.ACTIVE;
  };

  const openNav = () => {
    setNavStatus(NAV_STATUS.ACTIVE);
    useAppStore.getState().setMenuOpen(true);
  };

  const closeNav = () => {
    setNavStatus(NAV_STATUS.NOT_ACTIVE);
    useAppStore.getState().setMenuOpen(false);
  };

  const toggleNav = () => {
    if (isActive()) {
      closeNav();
    } else {
      openNav();
    }
  };

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const closeButtons = navElement.querySelectorAll('[data-nav-toggle="close"]');
    const handleCloseClick = (e: Event) => {
      e.preventDefault();
      closeNav();
    };

    closeButtons.forEach((btn) => {
      btn.addEventListener('click', handleCloseClick);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isActive()) {
        closeNav();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      closeButtons.forEach((btn) => {
        btn.removeEventListener('click', handleCloseClick);
      });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const currentStatus = navElement.getAttribute('data-nav-status') as NavStatus;

    if (isMenuOpen && currentStatus !== NAV_STATUS.ACTIVE) {
      navElement.setAttribute('data-nav-status', NAV_STATUS.ACTIVE);
    } else if (!isMenuOpen && currentStatus !== NAV_STATUS.NOT_ACTIVE) {
      navElement.setAttribute('data-nav-status', NAV_STATUS.NOT_ACTIVE);
    }
  }, [isMenuOpen]);

  const handleLinkClick = (href: string) => {
    closeMenu();
    if (href.startsWith('#')) {
      scrollToElement(href);
    }
  };

  return (
    <nav
      ref={navRef}
      data-twostep-nav
      data-nav-status={NAV_STATUS.NOT_ACTIVE}
      className="twostep-nav"
    >
      <div data-nav-toggle="close" className="twostep-nav__bg"></div>
      <div className="twostep-nav__wrap">
        <div className="twostep-nav__width">
          <div className="twostep-nav__bar">
            <div className="twostep-nav__back">
              <div className="twostep-nav__back-bg"></div>
            </div>
            <NavTopBar onToggle={toggleNav} isActive={isActive()} />
            <NavMenuContent onLinkClick={handleLinkClick} />
          </div>
        </div>
      </div>
    </nav>
  );
}
