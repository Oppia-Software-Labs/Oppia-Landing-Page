'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useSocialMediaPosts } from '@/hooks/useSocialMediaPosts';
import { SocialMediaCard } from '@/components/social-media/SocialMediaCard';
import Marquee from '@/components/ui/marquee';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function SocialMedia() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const { posts } = useSocialMediaPosts();

  // Duplicar los posts para crear un loop infinito
  const duplicatedPosts = [...posts, ...posts, ...posts];

  return (
    <section
      className="bg-black py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="social-media-title"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={t('socialMedia.title')}
          subtitle={t('socialMedia.description')}
          className="mb-8 sm:mb-12"
        />

        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-linear-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-linear-to-l from-black to-transparent" />

          <Marquee pauseOnHover className="[--duration:60s] [--gap:0.5rem]">
            {duplicatedPosts.map((post, index) => (
              <div key={`${post.id}-${index}`} className="shrink-0 w-80 pointer-events-auto relative">
                <SocialMediaCard post={post} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
