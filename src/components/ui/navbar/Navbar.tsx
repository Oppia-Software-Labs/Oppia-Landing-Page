'use client';

import { useAppStore } from '@/store/store';
import { useMenuAnimation } from '@/hooks/useMenuAnimation';
import { NavbarTopBar } from './NavbarTopBar';
import { MenuContent } from './MenuContent';
import { COLORS } from '@/constants/colors';

export function Navbar() {
  const isMenuOpen = useAppStore((state) => state.isMenuOpen);
  const toggleMenu = useAppStore((state) => state.toggleMenu);
  const closeMenu = useAppStore((state) => state.closeMenu);
  const { isClosing, showMenuContent, showBackdrop } = useMenuAnimation(isMenuOpen);

  return (
    <>
      {showBackdrop && (
        <div
          className={`fixed inset-0 z-[9998] bg-black/60 ${
            isClosing ? 'backdrop-fade-out' : 'backdrop-fade-in'
          }`}
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
      <nav className="fixed top-4 left-0 right-0 z-[9999] flex justify-center px-4">
        <div 
          className={`flex backdrop-blur-sm ${
            isMenuOpen && !isClosing
              ? 'navbar-expand w-[95%] max-w-[95%] rounded-2xl flex-col overflow-hidden px-6 py-4 sm:px-8' 
              : isClosing
              ? 'navbar-collapse w-[95%] max-w-[95%] rounded-2xl flex-col overflow-hidden px-6 py-4 sm:px-8'
              : 'w-full max-w-2xl rounded-full flex-row items-center justify-between px-5 py-2.5 sm:px-6'
          }`}
          style={{ 
            backgroundColor: COLORS.background.dark,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)'
          }}
        >
          <NavbarTopBar
            isMenuOpen={isMenuOpen}
            showMenuContent={showMenuContent}
            onToggleMenu={toggleMenu}
          />

          {showMenuContent && (
            <div className={`w-full ${isClosing ? 'menu-slide-up' : 'menu-slide-down'}`}>
              <MenuContent closeMenu={closeMenu} />
            </div>
          )}
      </div>
      </nav>
    </>
  );
}

