'use client';

import Image from 'next/image';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';

interface SectionItem {
  title: string;
  description: string;
}

export function WhoWeAre() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  const sections = (t('whoWeAre.sections') as unknown) as SectionItem[];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="mb-4 text-center text-8xl font-bold leading-tight text-white sm:text-3xl md:text-6xl">
          {t('whoWeAre.title')}
        </h2>

        {/* Description */}
        <p className="mb-12 text-center text-sm font-normal leading-relaxed text-gray-500 sm:text-base md:mb-16">
          {t('whoWeAre.description')}
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-[#242424] bg-gradient-to-b from-[#008CFF] to-[#061A4B] transition-all duration-300 hover:border-gray-500"
            >
              {/* Background SVG */}
              <div className="pointer-events-none absolute inset-0 opacity-50">
                <Image
                  src="/visuals/who-we-are/light-bg-who-we-are.svg"
                  alt=""
                  width={417}
                  height={489}
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                  priority={false}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="relative flex flex-col items-center p-6 sm:p-8">
                {/* Phone Drawing */}
                <div className="mb-6 flex items-center justify-center">
                  <Image
                    src="/visuals/who-we-are/phone-drawing.svg"
                    alt=""
                    width={275}
                    height={290}
                    className="h-auto w-full max-w-[200px] sm:max-w-[240px]"
                    aria-hidden="true"
                    priority={false}
                    loading="lazy"
                  />
                </div>

                {/* Section Title */}
                <h3 className="mb-3 text-center text-lg font-normal text-white sm:text-xl">
                  {section.title}
                </h3>

                {/* Section Description */}
                <p className="text-center text-sm font-normal leading-relaxed text-gray-300">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}