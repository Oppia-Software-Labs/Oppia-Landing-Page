'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { OppiaLogo } from '@/components/icons/oppia/OppiaLogo';
import { COLORS } from '@/constants/colors';

export function MenuOverlay() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const isMenuOpen = useAppStore((state) => state.isMenuOpen);
  const closeMenu = useAppStore((state) => state.closeMenu);

  if (!isMenuOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 animate-in bg-black/60 backdrop-blur-sm"
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-6xl zoom-in-95 rounded-2xl p-8 shadow-2xl"
          style={{ backgroundColor: COLORS.background.dark }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/4 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/8"
            aria-label={t('navbar.closeMenu')}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span>{t('navbar.closeMenu')}</span>
          </button>

          {/* Logo Centered */}
          <div className="mb-8 flex justify-center">
            <OppiaLogo width={120} height={34} className="h-8" />
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Left Column - Conocernos */}
            <div className="space-y-4 slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t('navbar.menuSections.knowUs.title')}
              </h3>
              <nav className="space-y-2">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.knowUs.links.about')}
                </a>
                <a
                  href="#mission"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.knowUs.links.mission')}
                </a>
                <a
                  href="#values"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.knowUs.links.values')}
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.knowUs.links.contact')}
                </a>
              </nav>
            </div>

            {/* Center Column - Social Media */}
            <div className="space-y-4 slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t('navbar.menuSections.social.title')}
              </h3>
              <nav className="space-y-2">
                <a
                  href="#twitter"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.social.links.twitter')}
                </a>
                <a
                  href="#linkedin"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.social.links.linkedin')}
                </a>
                <a
                  href="#instagram"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.social.links.instagram')}
                </a>
                <a
                  href="#github"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.social.links.github')}
                </a>
              </nav>
              {/* Social Icons */}
              <div className="mt-6 flex gap-3">
                <a
                  href="#twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white transition-colors hover:bg-white/8"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#linkedin"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white transition-colors hover:bg-white/8"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white transition-colors hover:bg-white/8"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Team */}
            <div className="space-y-4 slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {t('navbar.menuSections.team.title')}
              </h3>
              <nav className="space-y-2">
                <a
                  href="#members"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.team.links.members')}
                </a>
                <a
                  href="#careers"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.team.links.careers')}
                </a>
                <a
                  href="#join"
                  onClick={closeMenu}
                  className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
                >
                  {t('navbar.menuSections.team.links.join')}
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

