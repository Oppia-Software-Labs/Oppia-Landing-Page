'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useSocialMediaPosts } from '@/hooks/useSocialMediaPosts';
import { SocialMediaCard } from '@/components/social-media/SocialMediaCard';
import { SocialMediaSkeleton } from '@/components/social-media/SocialMediaSkeleton';
import { cn } from '@/utils/cn';

export function SocialMedia() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const { posts, state, error } = useSocialMediaPosts('OppiaLabs');

  const isLoading = state === 'loading';
  const hasError = state === 'error';
  const hasPosts = posts.length > 0;

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
          {isLoading && (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
              
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />
              
              <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                <SocialMediaSkeleton count={3} />
              </div>
            </div>
          )}

          {hasError && (
            <div
              className={cn(
                'flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-[#1A1A1A] p-8 text-center'
              )}
              role="alert"
              aria-live="polite"
            >
              <p className="mb-2 text-base font-medium text-white sm:text-lg">
                {t('socialMedia.error')}
              </p>
              <p className="text-sm text-gray-400">
                {error || t('socialMedia.errorDescription')}
              </p>
            </div>
          )}

          {!isLoading && !hasError && hasPosts && (
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />
              
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />
              
              <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {posts.slice(0, 3).map((post, index) => (
                  <SocialMediaCard 
                    key={post.id} 
                    post={post} 
                    isCenter={index === 1}
                  />
                ))}
              </div>
            </div>
          )}

          {!isLoading && !hasError && !hasPosts && (
            <div
              className={cn(
                'flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-[#1A1A1A] p-8 text-center'
              )}
            >
              <p className="mb-2 text-base font-medium text-white sm:text-lg">
                {t('socialMedia.noPosts')}
              </p>
              {error && (
                <p className="text-sm text-gray-400">
                  {error}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
