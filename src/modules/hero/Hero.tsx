'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { LeftWave } from '@/components/visuals/LeftWave';
import { RightWave } from '@/components/visuals/RightWave';
import { DirectionalButton } from '@/components/ui/DirectionalButton';
import { heroVariants } from '@/animations/hero';

export function Hero() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <section className="hero-min-h relative overflow-hidden bg-black pt-24" id="hero">
      <LeftWave />
      <RightWave />

      {/* Waves responsive: assets de visuals/hero (más pequeños) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden md:hidden">
        <div className="absolute bottom-0 left-0 w-[118%] h-[50%] -translate-x-[6%]">
          <Image
            src="/visuals/hero/wave-responsive-down.svg"
            alt=""
            width={800}
            height={600}
            className="h-full w-full object-cover object-bottom opacity-90"
            aria-hidden="true"
            priority={false}
          />
        </div>
        <div className="absolute -top-[4%] right-0 w-[88%] h-[42%] translate-x-[58%] origin-bottom-right -rotate-[4deg]">
          <Image
            src="/visuals/hero/wave-responsive-top-right.svg"
            alt=""
            width={800}
            height={600}
            className="h-full w-full object-cover object-top object-right opacity-90"
            aria-hidden="true"
            priority={false}
          />
        </div>
      </div>

      <motion.div
        className="hero-inner-min-h relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-start px-4 pt-48 text-center sm:px-6 sm:pt-52 lg:px-8"
        variants={heroVariants.container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white hero-badge"
          variants={heroVariants.badge}
        >
          {t('hero.badge')}
        </motion.div>

        <motion.h1
          className="mb-3 text-xl font-normal leading-[1.1] text-white sm:text-2xl md:text-3xl lg:text-4xl"
          variants={heroVariants.title}
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          className="mb-6 max-w-2xl text-sm font-bold leading-relaxed text-gray-300 sm:text-base"
          variants={heroVariants.description}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          className="flex flex-col gap-2 sm:flex-row sm:gap-3"
          variants={heroVariants.buttons}
        >
          <DirectionalButton
            variant="primary"
            size="md"
            asLink
            href="#products"
          >
            {t('hero.ctaPrimary')} →
          </DirectionalButton>
          <DirectionalButton
            variant="dark"
            size="md"
            asLink
            href="#cta"
          >
            {t('hero.ctaSecondary')}
          </DirectionalButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

