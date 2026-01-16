'use client';

import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';

export function DiscoverLink() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <a
      href="#discover"
      className="rounded-full bg-white/4 px-4 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-white/8"
    >
      {t('navbar.discover')}
    </a>
  );
}

