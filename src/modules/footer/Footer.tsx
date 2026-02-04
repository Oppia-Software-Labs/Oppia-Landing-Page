'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { OppiaLogo } from '@/components/icons/oppia/OppiaLogo';
import { FOOTER_SOCIAL_LINKS, SOCIAL_LINKS } from '@/constants/socialLinks';
import { InstagramIcon } from '@/components/icons/social-media/InstagramIcon';
import { XIcon } from '@/components/icons/social-media/XIcon';
import { LinkedInIcon } from '@/components/icons/social-media/LinkedInIcon';
import { GitHubIcon } from '@/components/icons/social-media/GitHubIcon';
import { DiscordIcon } from '@/components/icons/social-media/DiscordIcon';

export function Footer() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Left Wave */}
      <div className="absolute bottom-0 left-0 z-0 -translate-x-32 translate-y-12 max-md:-translate-x-40 max-md:translate-y-16">
        <Image
          src="/visuals/footer/left-wave.svg"
          alt=""
          width={1100}
          height={500}
          className="h-[500px] w-[1100px] max-md:h-[420px] max-md:w-[920px] opacity-80"
          aria-hidden="true"
        />
      </div>

      {/* Top Right Wave */}
      <div className="absolute top-0 right-0 z-0 translate-x-24 -translate-y-4 max-md:translate-x-32 max-md:-translate-y-8">
        <Image
          src="/visuals/footer/top-right-wave.svg"
          alt=""
          width={950}
          height={650}
          className="h-[650px] w-[950px] max-md:h-[560px] max-md:w-[820px] opacity-80"
          aria-hidden="true"
        />
      </div>

      {/* Down Right Wave */}
      <div className="absolute bottom-0 right-0 z-0 translate-x-32 translate-y-12 max-md:translate-x-40 max-md:translate-y-16">
        <Image
          src="/visuals/footer/down-right-wave.svg"
          alt=""
          width={900}
          height={500}
          className="h-[500px] w-[900px] max-md:h-[420px] max-md:w-[760px] opacity-80"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Logo and Info */}
          <div className="lg:max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <OppiaLogo width={48} height={48} className="h-12 w-auto" />
            </Link>
            <p className="text-base text-gray-400 mb-4 max-w-xs leading-relaxed">
              {t('footer.description')}
            </p>
            <a
              href="mailto:info@oppiasoftwarelabs.com"
              className="text-base text-gray-400 hover:text-white transition-colors"
            >
              info@oppiasoftwarelabs.com
            </a>
          </div>

          {/* Links, Resources, Socials */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-12 lg:gap-16">
            {/* Links - cada sección de la landing */}
            <nav className="min-w-[140px]" aria-label={t('footer.links.title')}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                {t('footer.links.title')}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#partners" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {t('footer.links.partners')}
                  </Link>
                </li>
                <li>
                  <Link href="#who-are-we" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {t('footer.links.whoAreWe')}
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {t('footer.links.products')}
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {t('footer.links.team')}
                  </Link>
                </li>
                <li>
                  <Link href="#social-media" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {t('footer.links.socialMedia')}
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {t('footer.links.faq')}
                  </Link>
                </li>
                <li>
                  <Link href="#cta" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {t('footer.links.contact')}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Socials */}
            <nav className="min-w-[140px]" aria-label={t('footer.socials.title')}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                {t('footer.socials.title')}
              </h3>
              <ul className="space-y-3">
                {FOOTER_SOCIAL_LINKS.map((social) => {
                  const getTranslationKey = (name: string) => {
                    const nameMap: Record<string, string> = {
                      'X': 'twitter',
                      'Instagram': 'instagram',
                      'LinkedIn': 'linkedin',
                      'GitHub': 'github',
                      'Discord': 'discord',
                    };
                    return nameMap[name] || name.toLowerCase();
                  };
                  return (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {t(`footer.socials.${getTranslationKey(social.name)}`)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Projects */}
            <nav className="min-w-[140px]" aria-label={t('footer.projects.title')}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                {t('footer.projects.title')}
              </h3>
              <ul className="space-y-3 list-none pl-0 m-0">
                <li>
                  <Link href="/projects/neko" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {t('products.neko.name')}
                  </Link>
                </li>
                <li>
                  <span className="text-sm text-gray-500 cursor-default" aria-disabled>
                    {t('products.geko.name')} — {t('products.comingSoonCta')}
                  </span>
                </li>
                <li>
                  <span className="text-sm text-gray-500 cursor-default" aria-disabled>
                    {t('products.deko.name')} — {t('products.comingSoonCta')}
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Separator Line */}
        <div className="mt-16 flex justify-start">
          <div className="h-px w-full bg-white"></div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <p className="text-base text-gray-400">
            {t('footer.copyright')}
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL_LINKS.DISCORD}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Discord"
            >
              <DiscordIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

