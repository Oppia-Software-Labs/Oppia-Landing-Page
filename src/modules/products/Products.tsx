'use client';

import { useRef, useState, useCallback } from 'react';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { GekoCard } from './GekoCard';
import { NekoCard } from './NekoCard';
import { DekoCard } from './DekoCard';
import { useCarouselAnimation } from '@/hooks/useCarouselAnimation';
import { CAROUSEL_CONFIG, CARD_POSITIONS } from '@/constants/carousel';
import { gsap } from 'gsap';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';

type ProductId = 'neko' | 'geko' | 'coming-soon';

const PRODUCTS: ProductId[] = ['neko', 'geko', 'coming-soon'];

interface ProductCardProps {
  'data-flick-cards-item': string;
  'data-flick-cards-item-status': string;
}

function renderProductCard(
  id: ProductId,
  index: number,
  cardProps: ProductCardProps,
  ref: (el: HTMLDivElement | null) => void
) {
  switch (id) {
    case 'neko':
      return <NekoCard {...cardProps} ref={ref} />;
    case 'geko':
      return <GekoCard {...cardProps} ref={ref} />;
    case 'coming-soon':
      return <DekoCard {...cardProps} ref={ref} />;
    default:
      return null;
  }
}

function getProductTranslationKey(productId: ProductId): string {
  return productId === 'coming-soon' ? 'comingSoon' : productId;
}

function animateCardsToIndex(
  cards: HTMLElement[],
  targetIndex: number,
  currentIndex: number,
  total: number
) {
  cards.forEach((card, i) => {
    let diff = i - targetIndex;
    if (diff > total / 2) diff -= total;
    else if (diff < -total / 2) diff += total;

    let config;
    switch (diff) {
      case 0:
        config = CARD_POSITIONS.ACTIVE;
        break;
      case 1:
        config = CARD_POSITIONS.ADJACENT_RIGHT;
        break;
      case -1:
        config = CARD_POSITIONS.ADJACENT_LEFT;
        break;
      default:
        config = CARD_POSITIONS.HIDDEN;
    }

    card.setAttribute('data-flick-cards-item-status', config.status);

    const parent = card.parentElement;
    if (parent) {
      parent.style.zIndex = String(config.zIndex);
    }

    gsap.to(card, {
      duration: CAROUSEL_CONFIG.ANIMATION_DURATION,
      ease: CAROUSEL_CONFIG.EASING,
      xPercent: config.x,
      yPercent: config.y,
      rotation: config.rotation,
      scale: config.scale,
      opacity: config.opacity,
    });
  });
}

export function Products() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const listRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = PRODUCTS.length;

  const handleIndexChange = useCallback(
    (newIndex: number) => {
      setActiveIndex(newIndex);
    },
    []
  );

  const getCardRef = useCallback((index: number) => {
    return (el: HTMLDivElement | null) => {
      if (el) cardsRef.current[index] = el;
    };
  }, []);

  const { sliderRef } = useCarouselAnimation({
    cardsRef,
    totalCards: total,
    activeIndex,
    onIndexChange: handleIndexChange,
  });

  const handleProductButtonClick = useCallback(
    (targetIndex: number) => {
      if (activeIndex === targetIndex) return;

      setActiveIndex(targetIndex);
      const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
      animateCardsToIndex(cards, targetIndex, activeIndex, total);
    },
    [activeIndex, total]
  );

  const getInitialZIndex = useCallback(
    (index: number) => {
      const diff = index - activeIndex;
      return diff === 0 ? CARD_POSITIONS.ACTIVE.zIndex : CARD_POSITIONS.ADJACENT_LEFT.zIndex;
    },
    [activeIndex]
  );

  return (
    <section className={`bg-black ${SECTION_SPACING.MEDIUM} overflow-x-hidden`}>
      <div className={`w-full ${CONTAINER_PADDING.HORIZONTAL}`}>
        <SectionHeader
          title={t('products.title')}
          subtitle={t('products.description')}
          className="mb-8"
        />

        <div className="mb-4 flex justify-center gap-2.5">
          {PRODUCTS.map((productId, idx) => {
            const translationKey = getProductTranslationKey(productId);
            const isActive = idx === activeIndex;

            return (
              <button
                key={productId}
                onClick={() => handleProductButtonClick(idx)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black'
                    : 'bg-white/50 text-white hover:bg-white/60'
                }`}
                aria-pressed={isActive}
                aria-label={`Switch to ${t(`products.${translationKey}.name`)}`}
              >
                {t(`products.${translationKey}.name`)}
              </button>
            );
          })}
        </div>

        <div
          ref={sliderRef}
          data-flick-cards-init=""
          className="relative w-full"
          style={{ minHeight: '700px' }}
        >
          <div
            className="opacity-0 pointer-events-none relative"
            style={{ width: '47em', margin: '0 auto' }}
          >
            <div style={{ paddingTop: '75%' }}></div>
          </div>

          <div className="w-full h-full absolute top-0 left-0">
            <div
              ref={listRef}
              data-flick-cards-list=""
              className="flex justify-center items-center w-full h-full relative"
            >
              {PRODUCTS.map((productId, index) => {
                const cardProps: ProductCardProps = {
                  'data-flick-cards-item': '',
                  'data-flick-cards-item-status': '',
                };

                return (
                  <div
                    key={productId}
                    className="absolute"
                    style={{ zIndex: getInitialZIndex(index) }}
                  >
                    {renderProductCard(productId, index, cardProps, getCardRef(index))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
