'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from '@/i18n/i18n';
import { SocialCard } from '@/modules/cta/SocialCard';
import { CTA_CONFIG } from '@/constants/cta';
import { SOCIAL_LINKS } from '@/constants/socialLinks';
import { PROJECT_CTA_CONFIGS } from '@/constants/projectCta';
import { ProductSlug } from '@/constants/products';
import { Locale } from '@/i18n/i18n';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';
import { InstagramIcon } from '@/components/icons/social-media/InstagramIcon';
import { XIcon } from '@/components/icons/social-media/XIcon';
import { DiscordIcon } from '@/components/icons/social-media/DiscordIcon';
import { LinkedInIcon } from '@/components/icons/social-media/LinkedInIcon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ctaVariants } from '@/animations/cta';

interface ProjectCTAProps {
  slug: ProductSlug;
  locale: Locale;
}

export function ProjectCTA({ slug, locale }: ProjectCTAProps) {
  const { t } = useTranslations(locale);
  const config = PROJECT_CTA_CONFIGS[slug as ProductSlug];

  return (
    <section className={`relative bg-black overflow-hidden ${SECTION_SPACING.MEDIUM} ${CONTAINER_PADDING.HORIZONTAL}`}>
      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        variants={ctaVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div variants={ctaVariants.header}>
          <SectionHeader
            title={t('cta.topTextLeft')}
            subtitle={t('cta.topTextRight')}
            className="mb-5"
            titleClassName="text-xl sm:text-2xl font-medium whitespace-pre-line"
            subtitleClassName="text-xs text-white/80 whitespace-pre-line"
          />
        </motion.div>

        <div
          className="relative rounded-2xl p-6 sm:p-8 lg:p-14 lg:py-16 max-w-6xl mx-auto overflow-hidden"
          style={{
            background: `linear-gradient(to bottom, ${config.gradient.from}, ${config.gradient.to})`,
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

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 pt-4 lg:pt-6">
            {/* Left Side - Logo, Description, Social Cards */}
            <motion.div
              className="flex flex-col pr-0 lg:pr-6"
              variants={ctaVariants.leftSide}
            >
              <div className="mb-4">
                <motion.div variants={ctaVariants.logo}>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Project Logo */}
                    <Image
                      src={config.logoPath}
                      alt={`${slug.charAt(0).toUpperCase() + slug.slice(1)} Logo`}
                      width={400}
                      height={180}
                      className="h-16 w-auto sm:h-20 lg:h-24"
                      priority
                    />
                    {/* Project Logotype */}
                    <Image
                      src={config.logotypePath}
                      alt={`${slug.charAt(0).toUpperCase() + slug.slice(1)} Logotype`}
                      width={200}
                      height={80}
                      className="h-14 w-auto sm:h-16 lg:h-20 brightness-0 invert"
                      priority
                    />
                  </div>
                </motion.div>
                <motion.p
                  className="text-sm text-white/90 leading-relaxed max-w-md pt-2 sm:pt-4"
                  variants={ctaVariants.description}
                >
                  {t('cta.description')}
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-2"
                variants={ctaVariants.socialCards}
              >
                {config.links.website && (
                  <motion.div variants={ctaVariants.socialCard}>
                    <SocialCard href={config.links.website} label={t('cta.website')} />
                  </motion.div>
                )}
                {config.links.twitter && (
                  <motion.div variants={ctaVariants.socialCard}>
                    <SocialCard href={config.links.twitter} label={t('cta.twitter')} />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* Right Side - Large Social Icons */}
            <motion.div
              className="flex items-center justify-center lg:justify-end pl-0 lg:pl-6"
              variants={ctaVariants.rightSide}
            >
              <motion.div
                className="flex gap-0 items-end"
                variants={ctaVariants.socialIcons}
              >
                {/* Instagram */}
                <motion.a
                  href={SOCIAL_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.translateY}`}
                  aria-label="Visit our Instagram"
                  variants={ctaVariants.socialIcon}
                >
                  <InstagramIcon className={`${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.iconSize} text-white`} />
                </motion.a>

                {/* X/Twitter */}
                <motion.a
                  href={SOCIAL_LINKS.TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CONFIG.LARGE_ICONS.TWITTER.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.TWITTER.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.TWITTER.translateY}`}
                  aria-label="Visit our X (Twitter)"
                  variants={ctaVariants.socialIcon}
                >
                  <XIcon className={`${CTA_CONFIG.LARGE_ICONS.TWITTER.iconSize} text-white`} />
                </motion.a>

                {/* Discord */}
                <motion.a
                  href={SOCIAL_LINKS.DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CONFIG.LARGE_ICONS.DISCORD.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.DISCORD.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.DISCORD.translateY}`}
                  aria-label="Join our Discord"
                  variants={ctaVariants.socialIcon}
                >
                  <DiscordIcon className={`${CTA_CONFIG.LARGE_ICONS.DISCORD.iconSize} text-white`} />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={SOCIAL_LINKS.LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${CTA_CONFIG.LARGE_ICONS.LINKEDIN.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.LINKEDIN.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 ${CTA_CONFIG.LARGE_ICONS.LINKEDIN.translateY}`}
                  aria-label="Visit our LinkedIn"
                  variants={ctaVariants.socialIcon}
                >
                  <LinkedInIcon className={`${CTA_CONFIG.LARGE_ICONS.LINKEDIN.iconSize} text-white`} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

