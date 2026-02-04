'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';
import { SOCIAL_LINKS } from '@/constants/socialLinks';
import { XIcon } from '@/components/icons/social-media/XIcon';
import { LinkedInIcon } from '@/components/icons/social-media/LinkedInIcon';
import { InstagramIcon } from '@/components/icons/social-media/InstagramIcon';
import { GitHubIcon } from '@/components/icons/social-media/GitHubIcon';
import { DiscordIcon } from '@/components/icons/social-media/DiscordIcon';
import type { NavbarVariants } from '@/animations/navbar';
import { navbarVariants } from '@/animations/navbar';

interface NavLink {
  href: string;
  translationKey: string;
  isExternal?: boolean;
}

interface NavSectionProps {
  titleKey: string;
  descriptionKey?: string;
  links: NavLink[];
  showSocialIcons?: boolean;
  onLinkClick?: (href: string) => void;
  variants?: Pick<NavbarVariants, 'menuSection' | 'menuItem'>;
}

export function NavSection({
  titleKey,
  descriptionKey,
  links,
  showSocialIcons = false,
  onLinkClick,
  variants: variantsProp,
}: NavSectionProps) {
  const variants = variantsProp ?? navbarVariants;
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const closeMenu = useAppStore((state) => state.closeMenu);

  const handleClick = (href: string, isExternal: boolean) => {
    if (isExternal) {
      closeMenu();
    } else if (onLinkClick) {
      onLinkClick(href);
    }
  };

  const socialIcons = [
    { href: SOCIAL_LINKS.TWITTER, icon: XIcon, label: 'Twitter' },
    { href: SOCIAL_LINKS.LINKEDIN, icon: LinkedInIcon, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.INSTAGRAM, icon: InstagramIcon, label: 'Instagram' },
    { href: SOCIAL_LINKS.GITHUB, icon: GitHubIcon, label: 'GitHub' },
    { href: SOCIAL_LINKS.DISCORD, icon: DiscordIcon, label: 'Discord' },
  ] as const;

  return (
    <motion.div className="twostep-nav__bottom-col" variants={variants.menuSection}>
      <div className="twostep-nav__section">
        <h3 className="twostep-nav__section-title">{t(titleKey)}</h3>
        {descriptionKey && (
          <p className="twostep-nav__section-description text-sm text-gray-400 mt-1 mb-3 max-w-xs">
            {t(descriptionKey)}
          </p>
        )}
        {showSocialIcons ? (
          <nav className="twostep-nav__section-nav">
            {links.map((link, index) => (
              <motion.a
                key={`${link.translationKey}-${index}`}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => handleClick(link.href, link.isExternal ?? false)}
                className="twostep-nav__link"
                variants={variants.menuItem}
              >
                <span className="twostep-nav__link-span">
                  {t(link.translationKey)}
                </span>
              </motion.a>
            ))}
          </nav>
        ) : (
          <ul className="twostep-nav__ul">
            {links.map((link, index) => (
              <motion.li
                key={`${link.translationKey}-${index}`}
                className="twostep-nav__li"
                variants={variants.menuItem}
              >
                <a
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={() => handleClick(link.href, link.isExternal ?? false)}
                  className="twostep-nav__link"
                >
                  <span className="twostep-nav__link-span">
                    {t(link.translationKey)}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        )}
        {showSocialIcons && (
          <div className="twostep-nav__social-icons">
            {socialIcons.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="twostep-nav__social-icon"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

