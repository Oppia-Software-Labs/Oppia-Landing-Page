'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';

export function WhoWeAre() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-normal leading-tight text-white sm:text-3xl md:text-4xl">
          {t('whoWeAre.title')}
        </h2>
      </div>
    </section>
  );
}