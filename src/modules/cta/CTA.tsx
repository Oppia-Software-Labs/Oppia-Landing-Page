'use client';

import Image from 'next/image';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { OppiaLogo } from '@/components/icons/oppia/OppiaLogo';
import { SOCIAL_LINKS, CTA_SOCIAL_LINKS } from '@/constants/socialLinks';
import { CTA_CONFIG } from '@/constants/cta';
import { SocialCard } from './SocialCard';
import { InstagramIcon } from '@/components/icons/social-media/InstagramIcon';
import { XIcon } from '@/components/icons/social-media/XIcon';
import { DiscordIcon } from '@/components/icons/social-media/DiscordIcon';
import { LinkedInIcon } from '@/components/icons/social-media/LinkedInIcon';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function CTA() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <section className={`relative bg-black overflow-hidden ${SECTION_SPACING.MEDIUM} ${CONTAINER_PADDING.HORIZONTAL}`}>
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          title={t('cta.topTextLeft')}
          subtitle={t('cta.topTextRight')}
          className="mb-8"
          titleClassName="text-2xl sm:text-3xl font-medium whitespace-pre-line"
          subtitleClassName="text-sm text-white/80 whitespace-pre-line"
        />
        <div
          className="relative rounded-3xl p-10 sm:p-14 lg:p-28 overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #03A7FF, #00398F)',
          }}
        >
          {/* Left Wave */}
          <div className="absolute bottom-0 left-0 z-0 -translate-x-1/4">
            <Image
              src="/visuals/cta/left-wave.svg"
              alt=""
              width={CTA_CONFIG.WAVES.LEFT.width}
              height={CTA_CONFIG.WAVES.LEFT.height}
              className={`h-[${CTA_CONFIG.WAVES.LEFT.height}px] w-[${CTA_CONFIG.WAVES.LEFT.width}px] opacity-100 brightness-150`}
              aria-hidden="true"
            />
          </div>

          {/* Right Wave */}
          <div className="absolute top-0 right-0 z-0 translate-x-1/4">
            <Image
              src="/visuals/cta/right-wave.svg"
              alt=""
              width={CTA_CONFIG.WAVES.RIGHT.width}
              height={CTA_CONFIG.WAVES.RIGHT.height}
              className={`h-[${CTA_CONFIG.WAVES.RIGHT.height}px] w-[${CTA_CONFIG.WAVES.RIGHT.width}px] opacity-100 brightness-150`}
              aria-hidden="true"
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-8 lg:pt-12">
            {/* Left Side - Logo, Description, and Social Cards */}
            <div className="flex flex-col">
              <div className="mb-6">
                <OppiaLogo width={48} height={48} className="h-12 w-auto mb-4" />
                <p className="text-base text-white/90 leading-relaxed max-w-md">
                  {t('cta.description')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {CTA_SOCIAL_LINKS.map((social) => (
                  <SocialCard key={social.href} href={social.href} label={t(social.labelKey)} />
                ))}
              </div>
            </div>

            {/* Right Side - Large Social Icons */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="flex gap-0 items-end">
                {/* Instagram */}
                <a
                  href={SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.translateY}`}
                  aria-label="Visit our Instagram"
                >
                  <InstagramIcon className={`${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.iconSize} text-white`} />
                </a>

                {/* X/Twitter */}
                <a
                  href={SOCIAL_LINKS.TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CONFIG.LARGE_ICONS.TWITTER.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.TWITTER.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.TWITTER.translateY}`}
                  aria-label="Visit our X (Twitter)"
                >
                  <XIcon className={`${CTA_CONFIG.LARGE_ICONS.TWITTER.iconSize} text-white`} />
                </a>

                {/* Discord */}
                <a
                  href={SOCIAL_LINKS.DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CONFIG.LARGE_ICONS.DISCORD.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.DISCORD.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.DISCORD.translateY}`}
                  aria-label="Join our Discord"
                >
                  <DiscordIcon className={`${CTA_CONFIG.LARGE_ICONS.DISCORD.iconSize} text-white`} />
                </a>

                {/* LinkedIn */}
                <a
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CONFIG.LARGE_ICONS.LINKEDIN.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.LINKEDIN.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 ${CTA_CONFIG.LARGE_ICONS.LINKEDIN.translateY}`}
                  aria-label="Visit our LinkedIn"
                >
                  <LinkedInIcon className={`${CTA_CONFIG.LARGE_ICONS.LINKEDIN.iconSize} text-white`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

