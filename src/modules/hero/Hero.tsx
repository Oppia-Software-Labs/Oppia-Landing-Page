'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { LeftWave } from '@/components/visuals/LeftWave';
import { RightWave } from '@/components/visuals/RightWave';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-24">
      <LeftWave />
      <RightWave />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-start px-4 pt-48 text-center sm:px-6 sm:pt-52 lg:px-8">
        <div 
          className="mb-4 inline-block rounded-full px-3.5 py-1.5 text-sm font-semibold text-white hero-badge"
        >
          {t('hero.badge')}
        </div>

        <h1 className="mb-4 text-2xl font-normal leading-[1.1] text-white sm:text-3xl md:text-4xl lg:text-5xl">
          {t('hero.title')}
        </h1>

        <p className="mb-8 max-w-2xl text-base font-bold leading-relaxed text-gray-300 sm:text-lg">
          {t('hero.description')}
        </p>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3.5">
          <Button
            variant="primary"
            size="md"
            asLink
            href="#discover"
            className="rounded-full bg-white text-black transition-all duration-300 ease-out hover:bg-gray-100"
          >
            {t('hero.ctaPrimary')} →
          </Button>
          <Button
            variant="ghost"
            size="md"
            asLink
            href="#products"
            className="hero-secondary-button text-white transition-all duration-300 ease-out"
          >
            {t('hero.ctaSecondary')}
          </Button>
        </div>
      </div>
    </section>
  );
}

