'use client';

import { motion } from 'framer-motion';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useSocialMediaPosts } from '@/hooks/useSocialMediaPosts';
import { SocialMediaCard } from '@/components/social-media/SocialMediaCard';
import Marquee from '@/components/ui/marquee';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';
import { socialMediaVariants } from '@/animations/socialMedia';

export function SocialMedia() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const { posts } = useSocialMediaPosts();

  const duplicatedPosts = [...posts, ...posts, ...posts];

  return (
    <section
      className={`bg-black ${SECTION_SPACING.MEDIUM} ${CONTAINER_PADDING.HORIZONTAL}`}
      aria-labelledby="social-media-title"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        variants={socialMediaVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: '-100px' }}
      >
        <motion.div variants={socialMediaVariants.header}>
          <SectionHeader
            title={t('socialMedia.title')}
            subtitle={t('socialMedia.description')}
            className="mb-8 sm:mb-12"
          />
        </motion.div>

        <motion.div
          className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8"
          variants={socialMediaVariants.marquee}
        >
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-linear-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-linear-to-l from-black to-transparent" />

          <Marquee pauseOnHover className="[--duration:60s] [--gap:0.5rem]">
            {duplicatedPosts.map((post, index) => (
              <div key={`${post.id}-${index}`} className="shrink-0 w-80 pointer-events-auto relative">
                <SocialMediaCard post={post} />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </motion.div>
    </section>
  );
}
