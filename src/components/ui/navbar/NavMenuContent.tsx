'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { OppiaLogo } from '@/components/icons/oppia/OppiaLogo';
import { NavSection } from './NavSection';
import { LanguageButton } from './LanguageButton';
import { SOCIAL_LINKS } from '@/constants/socialLinks';
import { navbarVariants, navbarVariantsMobile } from '@/animations/navbar';
import { useAppStore } from '@/store/store';

interface NavMenuContentProps {
  onLinkClick: (href: string) => void;
}

export function NavMenuContent({ onLinkClick }: NavMenuContentProps) {
  const isMenuOpen = useAppStore((state) => state.isMenuOpen);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const m = window.matchMedia('(max-width: 767px)');
    setIsMobile(m.matches);
    const fn = () => setIsMobile(m.matches);
    m.addEventListener('change', fn);
    return () => m.removeEventListener('change', fn);
  }, []);

  const variants = isMobile ? navbarVariantsMobile : navbarVariants;

  const knowUsLinks = [
    {
      href: '#who-are-we',
      translationKey: 'navbar.menuSections.knowUs.links.about',
    },
    {
      href: '#products',
      translationKey: 'navbar.menuSections.knowUs.links.projects',
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
            variants={variants.menuContent}
            initial="hidden"
            animate={isMenuOpen ? 'show' : 'hidden'}
          >
            <NavSection
              titleKey="navbar.menuSections.knowUs.title"
              links={knowUsLinks}
              onLinkClick={onLinkClick}
              variants={variants}
            />
            <div className="twostep-nav__social-section hidden lg:block">
              <NavSection
                titleKey="navbar.menuSections.social.title"
                links={socialLinks}
                showSocialIcons={true}
                variants={variants}
              />
            </div>
            <NavSection
              titleKey="navbar.menuSections.team.title"
              links={teamLinks}
              onLinkClick={onLinkClick}
              variants={variants}
            />
            <motion.div
              className="twostep-nav__bottom-col is--visual"
              variants={variants.visual}
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

