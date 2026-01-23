'use client';

import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';

export function DiscoverLink() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#products');
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
        <a
      href="#products"
      onClick={handleClick}
          className="rounded-full bg-white/4 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-white/8"
        >
      {t('navbar.discover')}
    </a>
  );
}

