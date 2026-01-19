'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useSocialMediaPosts } from '@/hooks/useSocialMediaPosts';
import { SocialMediaCard } from '@/components/social-media/SocialMediaCard';

export function SocialMedia() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const { posts } = useSocialMediaPosts();

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

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {posts.map((post, index) => (
              <SocialMediaCard
                key={post.id}
                post={post}
                isCenter={index === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
