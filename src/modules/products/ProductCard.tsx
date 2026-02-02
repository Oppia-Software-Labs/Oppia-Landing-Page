/**
 * ProductCard component
 * Generic reusable product card component
 */

'use client';

import { forwardRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { ProductCardBase } from './ProductCardBase';
import { ProductTags } from '@/components/products/ProductTags';
import { ProductButton } from '@/components/products/ProductButton';
import { ProductLogo } from '@/components/products/ProductLogo';
import { CornerIcon } from '@/components/products/CornerIcon';
import { PRODUCT_CONFIGS, ProductSlug } from '@/constants/products';

interface ProductCardProps {
  'data-flick-cards-item': string;
  'data-flick-cards-item-status': string;
  slug: ProductSlug;
}

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>((props, ref) => {
  const { slug } = props;
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const router = useRouter();

  const config = PRODUCT_CONFIGS[slug];
  const tags = t(`products.${slug}.tags`).split(',');
  const description = t(`products.${slug}.description`);
  const ctaText = t(`products.${slug}.cta`);
  const projectName = t(`products.${slug}.name`);

  const status = props['data-flick-cards-item-status'] || '';
  const isActive = status === 'active' || !status;

  const handleSeeProject = () => {
    router.push(`/projects/${slug}`);
  };

  let mouseDownX = 0;
  let mouseDownY = 0;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseDownX = e.clientX;
    mouseDownY = e.clientY;
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if it was a drag (mouse moved more than 5px) or a click
    const mouseMoveX = Math.abs(e.clientX - mouseDownX);
    const mouseMoveY = Math.abs(e.clientY - mouseDownY);
    const wasDrag = mouseMoveX > 5 || mouseMoveY > 5;

    // Only navigate if clicking directly on the card, not on interactive elements or drag
    const target = e.target as HTMLElement;
    const isInteractiveElement =
      target.closest('button') ||
      target.closest('a') ||
      target.tagName === 'BUTTON' ||
      target.tagName === 'A';
    
    if (!isInteractiveElement && !wasDrag) {
      handleSeeProject();
    }
  };

  return (
    <div
      ref={ref}
      {...props}
      onMouseDown={handleMouseDown}
      onClick={handleCardClick}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
      }}
    >
      <ProductCardBase>
        <div
          className={`flex h-full flex-col items-center justify-center p-5 pt-7 max-md:p-3 max-md:pt-5 max-[414px]:p-2.5 max-[414px]:pt-4 transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex w-full flex-col items-center text-center -translate-y-24 max-md:-translate-y-16 max-[414px]:-translate-y-12">
            <ProductTags tags={tags} />

            <h3 className="mb-3 text-4xl font-bold text-white max-md:text-2xl max-md:mb-2.5 max-[414px]:text-xl max-[414px]:mb-2">{projectName}</h3>

            <p className="mb-4 max-w-[300px] text-sm font-normal leading-relaxed text-white text-center max-md:max-w-[240px] max-md:text-xs max-md:mb-3 max-[414px]:max-w-[200px] max-[414px]:text-[11px] max-[414px]:mb-2.5">
              {description}
            </p>

            <ProductButton text={ctaText} onClick={handleSeeProject} variant={config.buttonStyle} />
          </div>
        </div>

        {/* Only show central logo if there's no corner icon, or if card is inactive */}
        {(!config.cornerIcon || !isActive) && (
          <ProductLogo config={config.logo} slug={slug} isActive={isActive} />
        )}

        {/* Show corner icon only when card is active and corner icon is configured */}
        {config.cornerIcon && isActive && (
          <CornerIcon config={config.cornerIcon} alt={`${projectName} corner icon`} />
        )}
      </ProductCardBase>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
