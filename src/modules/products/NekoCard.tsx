'use client';

import Image from 'next/image';
import { ProductCardBase } from './ProductCardBase';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { forwardRef } from 'react';

interface NekoCardProps {
  'data-flick-cards-item': string;
  'data-flick-cards-item-status': string;
}

export const NekoCard = forwardRef<HTMLDivElement, NekoCardProps>((props, ref) => {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  const tags = t('products.neko.tags').split(',');
  const description = t('products.neko.description');
  const ctaText = t('products.neko.cta');

  const status = props['data-flick-cards-item-status'] || '';
  const isActive = status === 'active' || !status;

  return (
    <div
      ref={ref}
      {...props}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <ProductCardBase className="h-[600px] w-[450px]">
        <div className={`flex h-full flex-col items-center justify-between p-6 pt-9 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex w-full flex-col items-center">
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full px-3.5 py-1 text-xs font-medium text-white bg-white/12"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-4 text-5xl font-bold text-white">Neko</h3>

            <p className="mb-5 max-w-[320px] text-base font-normal leading-relaxed text-white text-center">
              {description}
            </p>

            <button
              className="mb-5 w-fit rounded-full px-8 py-2.5 text-sm font-medium bg-gray-300 text-black hover:bg-gray-400 transition-all duration-400"
              style={{
                transitionTimingFunction: 'cubic-bezier(0.625, 0.05, 0, 1)',
              }}
            >
              {ctaText}
            </button>
          </div>
        </div>

      {isActive ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4 z-20">
          <Image
            src="/oppia-projects/Neko.svg"
            alt="Neko"
            width={280}
            height={280}
            className="h-[280px] w-[280px] brightness-0 invert"
            priority
          />
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Image
            src="/oppia-projects/Neko-Project.svg"
            alt="Neko Logo"
            width={200}
            height={200}
            className="h-[200px] w-[200px]"
            priority
          />
        </div>
      )}
      </ProductCardBase>
    </div>
  );
});

NekoCard.displayName = 'NekoCard';
