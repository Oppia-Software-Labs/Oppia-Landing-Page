'use client';

import { motion } from 'framer-motion';
import { OppiaLogo } from '@/components/icons/oppia/OppiaLogo';
import { NavSection } from './NavSection';
import { LanguageButton } from './LanguageButton';
import { SOCIAL_LINKS } from '@/constants/socialLinks';
import { navbarVariants } from '@/animations/navbar';
import { useAppStore } from '@/store/store';

interface NavMenuContentProps {
  onLinkClick: (href: string) => void;
}

export function NavMenuContent({ onLinkClick }: NavMenuContentProps) {
  const isMenuOpen = useAppStore((state) => state.isMenuOpen);

  const knowUsLinks = [
    {
      href: '#who-are-we',
      translationKey: 'navbar.menuSections.knowUs.links.about',
    },
    {
      href: '#products',
      translationKey: 'navbar.menuSections.knowUs.links.mission',
    },
    {
      href: '#who-are-we',
      translationKey: 'navbar.menuSections.knowUs.links.values',
    },
    {
      href: '#cta',
      translationKey: 'navbar.menuSections.knowUs.links.contact',
    },
  ];

  const socialLinks = [
    {
      href: SOCIAL_LINKS.TWITTER,
      translationKey: 'navbar.menuSections.social.links.twitter',
      isExternal: true,
    },
    {
      href: SOCIAL_LINKS.LINKEDIN,
      translationKey: 'navbar.menuSections.social.links.linkedin',
      isExternal: true,
    },
    {
      href: SOCIAL_LINKS.INSTAGRAM,
      translationKey: 'navbar.menuSections.social.links.instagram',
      isExternal: true,
    },
    {
      href: SOCIAL_LINKS.GITHUB,
      translationKey: 'navbar.menuSections.social.links.github',
      isExternal: true,
    },
  ];

  const teamLinks = [
    {
      href: '#team',
      translationKey: 'navbar.menuSections.team.links.members',
    },
    {
      href: '#faq',
      translationKey: 'navbar.menuSections.team.links.faq',
    },
    {
      href: '#cta',
      translationKey: 'navbar.menuSections.team.links.join',
    },
  ];

  return (
    <motion.div className="twostep-nav__bottom">
      <div className="twostep-nav__bottom-overflow">
        <div className="twostep-nav__bottom-inner">
          <div className="twostep-nav__menu-language mb-6 flex justify-center sm:hidden">
            <LanguageButton />
          </div>
          <motion.div
            className="twostep-nav__bottom-row"
            variants={navbarVariants.menuContent}
            initial="hidden"
            animate={isMenuOpen ? 'show' : 'hidden'}
          >
            <NavSection
              titleKey="navbar.menuSections.knowUs.title"
              links={knowUsLinks}
              onLinkClick={onLinkClick}
            />
            <NavSection
              titleKey="navbar.menuSections.social.title"
              links={socialLinks}
              showSocialIcons={true}
            />
            <NavSection
              titleKey="navbar.menuSections.team.title"
              links={teamLinks}
              onLinkClick={onLinkClick}
            />
            <motion.div
              className="twostep-nav__bottom-col is--visual"
              variants={navbarVariants.visual}
            >
              <div className="twostep-nav__visual">
                <div className="twostep-nav__visual-img flex items-center justify-center bg-gradient-to-br from-[#03A7FF] to-[#00398F] rounded-lg">
                  <OppiaLogo width={200} height={200} className="opacity-80" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

