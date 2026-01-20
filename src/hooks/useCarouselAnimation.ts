import { useEffect, useRef, useState } from 'react';
import type React from 'react';
import { gsap } from 'gsap';
import { CAROUSEL_CONFIG, CARD_POSITIONS, type CardStatus } from '@/constants/carousel';

let Draggable: any;
if (typeof window !== 'undefined') {
  Draggable = require('gsap/Draggable').Draggable;
  gsap.registerPlugin(Draggable);
}

type DraggableType = any;

interface UseCarouselAnimationProps {
  cardsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  totalCards: number;
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

interface CardConfig {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
  zIndex: number;
  status: CardStatus;
}

function calculateDiff(index: number, currentIndex: number, total: number): number {
  let diff = index - currentIndex;
  if (diff > total / 2) diff -= total;
  else if (diff < -total / 2) diff += total;
  return diff;
}

function getCardConfig(index: number, currentIndex: number, total: number): CardConfig {
  const diff = calculateDiff(index, currentIndex, total);

  switch (diff) {
    case 0:
      return CARD_POSITIONS.ACTIVE;
    case 1:
      return CARD_POSITIONS.ADJACENT_RIGHT;
    case -1:
      return CARD_POSITIONS.ADJACENT_LEFT;
    case 2:
      return CARD_POSITIONS.FAR_RIGHT;
    case -2:
      return CARD_POSITIONS.FAR_LEFT;
    default: {
      const direction = diff > 0 ? 1 : -1;
      return {
        ...CARD_POSITIONS.HIDDEN,
        x: CARD_POSITIONS.HIDDEN.x * direction,
        rotation: CARD_POSITIONS.HIDDEN.rotation * direction,
      };
    }
  }
}

function animateCard(
  card: HTMLElement,
  config: CardConfig,
  duration: number = CAROUSEL_CONFIG.ANIMATION_DURATION
) {
  card.setAttribute('data-flick-cards-item-status', config.status);

  const parent = card.parentElement;
  if (parent) {
    parent.style.zIndex = String(config.zIndex);
  }

  gsap.to(card, {
    duration,
    ease: CAROUSEL_CONFIG.EASING,
    xPercent: config.x,
    yPercent: config.y,
    rotation: config.rotation,
    scale: config.scale,
    opacity: config.opacity,
  });
}

export function useCarouselAnimation({
  cardsRef,
  totalCards,
  activeIndex,
  onIndexChange,
}: UseCarouselAnimationProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const draggersRef = useRef<HTMLDivElement[]>([]);
  const draggableInstancesRef = useRef<DraggableType[]>([]);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(activeIndex);

  useEffect(() => {
    setCurrentActiveIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (typeof window === 'undefined' || !sliderRef.current) return;

    const slider = sliderRef.current;
    const validCards = cardsRef.current.filter(Boolean) as HTMLElement[];

    if (validCards.length === 0 || totalCards < CAROUSEL_CONFIG.MIN_CARDS) {
      return;
    }

    const sliderWidth = slider.offsetWidth;

    const draggers: HTMLDivElement[] = [];
    validCards.forEach((card) => {
      const dragger = document.createElement('div');
      dragger.setAttribute('data-flick-cards-dragger', '');
      dragger.style.cssText =
        'position: absolute; inset: 0; z-index: 100; pointer-events: auto; touch-action: pan-y; cursor: grab;';
      card.appendChild(dragger);
      draggers.push(dragger);
    });

    draggersRef.current = draggers;
    slider.setAttribute('data-flick-drag-status', 'grab');

    let pressClientX = 0;
    let pressClientY = 0;

    const renderCards = (index: number) => {
      validCards.forEach((card, i) => {
        const config = getCardConfig(i, index, totalCards);
        animateCard(card, config);
      });
    };

    renderCards(currentActiveIndex);

    const draggableInstances = Draggable.create(draggers, {
      type: 'x',
      edgeResistance: CAROUSEL_CONFIG.EDGE_RESISTANCE,
      bounds: { minX: -sliderWidth / 2, maxX: sliderWidth / 2 },
      inertia: false,

      onPress(this: DraggableType) {
        const evt = this.pointerEvent;
        if ('clientX' in evt) {
          pressClientX = evt.clientX;
          pressClientY = evt.clientY;
        }
        slider.setAttribute('data-flick-drag-status', 'grabbing');
        (this.target as HTMLElement).style.cursor = 'grabbing';
      },

      onDrag(this: DraggableType) {
        const rawProgress = this.x / sliderWidth;
        const progress = Math.min(1, Math.abs(rawProgress));
        const direction = rawProgress > 0 ? -1 : 1;
        const nextIndex = (currentActiveIndex + direction + totalCards) % totalCards;

        validCards.forEach((card, i) => {
          const from = getCardConfig(i, currentActiveIndex, totalCards);
          const to = getCardConfig(i, nextIndex, totalCards);
          const mix = (prop: keyof CardConfig) => {
            const fromVal = from[prop] as number;
            const toVal = to[prop] as number;
            return fromVal + (toVal - fromVal) * progress;
          };

          gsap.set(card, {
            xPercent: mix('x'),
            yPercent: mix('y'),
            rotation: mix('rotation'),
            scale: mix('scale'),
            opacity: mix('opacity'),
          });
        });
      },

      onRelease(this: DraggableType) {
        slider.setAttribute('data-flick-drag-status', 'grab');
        (this.target as HTMLElement).style.cursor = 'grab';

        const evt = this.pointerEvent;
        let releaseClientX = 0;
        let releaseClientY = 0;
        if ('clientX' in evt) {
          releaseClientX = evt.clientX;
          releaseClientY = evt.clientY;
        }

        const dragDistance = Math.hypot(
          releaseClientX - pressClientX,
          releaseClientY - pressClientY
        );

        const raw = this.x / sliderWidth;
        let shift = 0;
        if (raw > CAROUSEL_CONFIG.DRAG_THRESHOLD) shift = -1;
        else if (raw < -CAROUSEL_CONFIG.DRAG_THRESHOLD) shift = 1;

        if (shift !== 0) {
          const newIndex = (currentActiveIndex + shift + totalCards) % totalCards;
          setCurrentActiveIndex(newIndex);
          onIndexChange(newIndex);
          renderCards(newIndex);
        }

        gsap.to(this.target, {
          x: 0,
          duration: CAROUSEL_CONFIG.RELEASE_DURATION,
          ease: CAROUSEL_CONFIG.RELEASE_EASING,
        });

        if (dragDistance < CAROUSEL_CONFIG.CLICK_THRESHOLD) {
          (this.target as HTMLElement).style.pointerEvents = 'none';

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const el = document.elementFromPoint(releaseClientX, releaseClientY);
              if (el) {
                const clickEvent = new MouseEvent('click', {
                  view: window,
                  bubbles: true,
                  cancelable: true,
                });
                el.dispatchEvent(clickEvent);
              }

              (this.target as HTMLElement).style.pointerEvents = 'auto';
            });
          });
        }
      },
    });

    draggableInstancesRef.current = draggableInstances;

    return () => {
      draggableInstances.forEach((d: DraggableType) => d.kill());
      draggers.forEach((d: HTMLDivElement) => d.remove());
    };
  }, [cardsRef, totalCards, currentActiveIndex, onIndexChange]);

  return {
    sliderRef,
    getCardConfig: (index: number) => getCardConfig(index, currentActiveIndex, totalCards),
    animateCard: (card: HTMLElement, config: CardConfig) => animateCard(card, config),
  };
}

