'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { StellarLogo } from '@/components/icons/partners/StellarLogo';
import { CatalitecLogo } from '@/components/icons/partners/CatalitecLogo';

export function Partners() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xl font-semibold text-white">
          {t('partners.title')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          <StellarLogo width={200} height={40} className="h-8 w-auto opacity-80 transition-opacity hover:opacity-100" />
          <CatalitecLogo width={200} height={40} className="h-8 w-auto opacity-80 transition-opacity hover:opacity-100" />
        </div>
      </div>
    </section>
  );
}

1