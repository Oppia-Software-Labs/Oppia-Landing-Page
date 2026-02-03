'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';
import { whoAreWeVariants } from '@/animations/whoAreWe';

export function WhoAreWe() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  const cards = [
    {
      key: 'simplicity',
      title: t('whoAreWe.cards.simplicity.title'),
      description: t('whoAreWe.cards.simplicity.description'),
      illustration: '/who-are-we/simplicity-ilustration.svg',
      wave: 'left',
      waveSrc: '/who-are-we/left-wave.svg',
    },
    {
      key: 'functionality',
      title: t('whoAreWe.cards.functionality.title'),
      description: t('whoAreWe.cards.functionality.description'),
      illustration: '/who-are-we/functionality-ilustration.svg',
      wave: 'center',
      waveLeftSrc: '/who-are-we/center-left-wave.svg',
      waveRightSrc: '/who-are-we/center-right-wave.svg',
      hasGradient: true,
    },
    {
      key: 'purpose',
      title: t('whoAreWe.cards.purpose.title'),
      description: t('whoAreWe.cards.purpose.description'),
      illustration: '/who-are-we/purpose-ilustration.svg',
      wave: 'right',
      waveSrc: '/who-are-we/right-wave.svg',
    },
  ];

  return (
    <section className={`bg-black ${SECTION_SPACING.MEDIUM} ${CONTAINER_PADDING.HORIZONTAL}`}>
      <motion.div
        className="mx-auto max-w-7xl"
        variants={whoAreWeVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: '-100px' }}
      >
        <motion.div variants={whoAreWeVariants.title}>
          <SectionHeader
            title={t('whoAreWe.title')}
            subtitle={t('whoAreWe.description')}
            className="mb-6 md:mb-10"
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-10 items-start"
          variants={whoAreWeVariants.cards}
        >
          {cards.map((card) => {
            // Determine variant based on card position
            let cardVariant = whoAreWeVariants.cardCenter;
            if (card.key === 'simplicity') {
              cardVariant = whoAreWeVariants.cardLeft;
            } else if (card.key === 'purpose') {
              cardVariant = whoAreWeVariants.cardRight;
            } else if (card.key === 'functionality') {
              cardVariant = whoAreWeVariants.cardCenter;
            }

            return (
              <motion.div
                key={card.key}
                className="flex flex-col w-full max-w-[340px] max-md:max-w-[280px] max-[389px]:max-w-[240px] mx-auto h-full"
                variants={cardVariant}
              >
                <div
                  className={`relative border-2 border-white/20 overflow-hidden p-5 md:p-6 lg:p-8 flex flex-col h-[300px] md:h-[340px] lg:h-[380px] w-full max-[389px]:h-[260px] max-[389px]:p-3 rounded-lg md:rounded-xl ${
                    card.hasGradient
                      ? ''
                      : 'bg-black/40 backdrop-blur-sm'
                  }`}
                  style={{
                    ...(card.hasGradient && {
                      background: 'linear-gradient(to bottom, #03A7FF, #00398F)',
                    }),
                  }}
                >
                  {/* Waves inside card */}
                  {card.wave === 'left' && card.waveSrc && (
                    <>
                      <div className="absolute bottom-0 left-0 z-0">
                        <Image
                          src={card.waveSrc}
                          alt=""
                          width={500}
                          height={350}
                          className="h-[200px] w-[280px] md:h-[240px] md:w-[360px] lg:h-[300px] lg:w-[440px] opacity-100 max-[389px]:h-[160px] max-[389px]:w-[220px]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="absolute top-0 right-0 z-0 translate-x-1/4">
                        <Image
                          src="/who-are-we/right-wave.svg"
                          alt=""
                          width={500}
                          height={350}
                          className="h-[200px] w-[280px] md:h-[240px] md:w-[360px] lg:h-[300px] lg:w-[440px] opacity-100 max-[389px]:h-[160px] max-[389px]:w-[220px]"
                          aria-hidden="true"
                        />
                      </div>
                    </>
                  )}
                  {card.wave === 'right' && card.waveSrc && (
                    <>
                      <div className="absolute bottom-0 left-0 z-0">
                        <Image
                          src="/who-are-we/left-wave.svg"
                          alt=""
                          width={500}
                          height={350}
                          className="h-[200px] w-[280px] md:h-[240px] md:w-[360px] lg:h-[300px] lg:w-[440px] opacity-100 max-[389px]:h-[160px] max-[389px]:w-[220px]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="absolute top-0 right-0 z-0 translate-x-1/4">
                        <Image
                          src={card.waveSrc}
                          alt=""
                          width={500}
                          height={350}
                          className="h-[200px] w-[280px] md:h-[240px] md:w-[360px] lg:h-[300px] lg:w-[440px] opacity-100 max-[389px]:h-[160px] max-[389px]:w-[220px]"
                          aria-hidden="true"
                        />
                      </div>
                    </>
                  )}
                  {card.wave === 'center' && card.waveLeftSrc && card.waveRightSrc && (
                    <>
                      <div className="absolute bottom-0 left-0 z-0">
                        <Image
                          src={card.waveLeftSrc}
                          alt=""
                          width={450}
                          height={350}
                          className="h-[180px] w-[240px] md:h-[220px] md:w-[320px] lg:h-[280px] lg:w-[380px] opacity-100 max-[389px]:h-[140px] max-[389px]:w-[180px]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="absolute inset-y-0 right-0 z-0 w-[60%] min-w-[160px]">
                        <Image
                          src="/who-are-we/center-right-wave.svg"
                          alt=""
                          width={235}
                          height={486}
                          className="h-full w-full opacity-100 object-cover object-right brightness-125 contrast-105"
                          aria-hidden="true"
                        />
                      </div>
                    </>
                  )}

                  {/* Illustration */}
                  <div className="relative z-10 flex items-center justify-center flex-1 pt-2 md:pt-3">
                    <Image
                      src={card.illustration}
                      alt=""
                      width={200}
                      height={300}
                      className="h-auto w-auto max-h-24 md:max-h-28 lg:max-h-32 max-[389px]:max-h-20"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mt-2.5 md:mt-3 mb-1 md:mb-1.5 max-[389px]:text-sm max-[389px]:mt-2 max-[389px]:mb-1">{card.title}</h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-[389px]:text-[11px]">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

