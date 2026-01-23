'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { SOCIAL_LINKS } from '@/constants/socialLinks';
import { XIcon } from '@/components/icons/social-media/XIcon';
import { LinkedInIcon } from '@/components/icons/social-media/LinkedInIcon';
import { InstagramIcon } from '@/components/icons/social-media/InstagramIcon';
import { GitHubIcon } from '@/components/icons/social-media/GitHubIcon';
import { DiscordIcon } from '@/components/icons/social-media/DiscordIcon';

interface MenuContentProps {
  closeMenu: () => void;
}

export function MenuContent({ closeMenu }: MenuContentProps) {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const offset = 100; // Offset for fixed navbar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            {t('navbar.menuSections.knowUs.title')}
          </h3>
          <nav className="space-y-2">
            <a
              href="#who-are-we"
              onClick={handleLinkClick}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.knowUs.links.about')}
            </a>
            <a
              href="#products"
              onClick={handleLinkClick}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.knowUs.links.mission')}
            </a>
            <a
              href="#who-are-we"
              onClick={handleLinkClick}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.knowUs.links.values')}
            </a>
            <a
              href="#cta"
              onClick={handleLinkClick}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.knowUs.links.contact')}
            </a>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            {t('navbar.menuSections.social.title')}
          </h3>
          <nav className="space-y-2">
            <a
              href={SOCIAL_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.social.links.twitter')}
            </a>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.social.links.linkedin')}
            </a>
            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.social.links.instagram')}
            </a>
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.social.links.github')}
            </a>
          </nav>
          <div className="mt-6 flex gap-3">
            <a
              href={SOCIAL_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white transition-colors hover:bg-white/8"
              aria-label="Twitter"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white transition-colors hover:bg-white/8"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white transition-colors hover:bg-white/8"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white transition-colors hover:bg-white/8"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white transition-colors hover:bg-white/8"
              aria-label="Discord"
            >
              <DiscordIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            {t('navbar.menuSections.team.title')}
          </h3>
          <nav className="space-y-2">
            <a
              href="#team"
              onClick={handleLinkClick}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.team.links.members')}
            </a>
            <a
              href="#faq"
              onClick={handleLinkClick}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.team.links.careers')}
            </a>
            <a
              href="#cta"
              onClick={handleLinkClick}
              className="block border-b border-gray-800 py-3 text-base font-medium text-white transition-colors hover:text-gray-300"
            >
              {t('navbar.menuSections.team.links.join')}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

