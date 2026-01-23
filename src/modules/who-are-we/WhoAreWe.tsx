'use client';

import Image from 'next/image';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';

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
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          title={t('whoAreWe.title')}
          subtitle={t('whoAreWe.description')}
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card) => (
            <div key={card.key} className="flex flex-col max-w-sm mx-auto">
              <div
                className={`relative rounded-2xl overflow-hidden p-8 lg:p-10 flex flex-col flex-1 min-h-[480px] w-full ${
                  card.hasGradient
                    ? 'bg-gradient-to-b from-[#015A8F] to-[#001A4D] border border-white/20'
                    : 'bg-black/40 backdrop-blur-sm border border-white/10'
                }`}
              >
                {/* Waves inside card */}
                {card.wave === 'left' && card.waveSrc && (
                  <>
                    <div className="absolute bottom-0 left-0 z-0 translate-x-1/300">
                      <Image
                        src={card.waveSrc}
                        alt=""
                        width={500}
                        height={350}
                        className="h-[350px] w-[500px] opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="absolute top-0 right-0 z-0 translate-x-1/4">
                      <Image
                        src="/who-are-we/right-wave.svg"
                        alt=""
                        width={500}
                        height={350}
                        className="h-[350px] w-[500px] opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                  </>
                )}
                {card.wave === 'right' && card.waveSrc && (
                  <>
                    <div className="absolute bottom-0 left-0 z-0 translate-x-1/300">
                      <Image
                        src="/who-are-we/left-wave.svg"
                        alt=""
                        width={500}
                        height={350}
                        className="h-[350px] w-[500px] opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="absolute top-0 right-0 z-0 translate-x-1/4">
                      <Image
                        src={card.waveSrc}
                        alt=""
                        width={500}
                        height={350}
                        className="h-[350px] w-[500px] opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                  </>
                )}
                {card.wave === 'center' && card.waveLeftSrc && card.waveRightSrc && (
                  <>
                    <div className="absolute bottom-0 left-0 z-0 -translate-x-1/14">
                      <Image
                        src={card.waveLeftSrc}
                        alt=""
                        width={450}
                        height={350}
                        className="h-[350px] w-[450px] opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="absolute top-0 right-0 z-0 translate-x-1/4">
                      <Image
                        src={card.waveRightSrc}
                        alt=""
                        width={450}
                        height={350}
                        className="h-[350px] w-[450px] opacity-100"
                        aria-hidden="true"
                      />
                    </div>
                  </>
                )}

                {/* Illustration */}
                <div className="relative z-10 flex items-center justify-center flex-1 pt-4">
                  <Image
                    src={card.illustration}
                    alt=""
                    width={200}
                    height={300}
                    className="h-auto w-auto max-h-48"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mt-4 mb-2">{card.title}</h3>
              <p className="text-base text-gray-300 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

