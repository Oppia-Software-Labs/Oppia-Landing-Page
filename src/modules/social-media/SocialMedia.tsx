'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useSocialMediaPosts } from '@/hooks/useSocialMediaPosts';
import { SocialMediaCard } from '@/components/social-media/SocialMediaCard';
import Marquee from '@/components/ui/marquee';

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
        <header className="mb-8 text-center sm:mb-12">
          <h2
            id="social-media-title"
            className="mb-4 text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl"
          >
            {t('socialMedia.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-gray-400 sm:text-base">
            {t('socialMedia.description')}
          </p>
        </header>

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
