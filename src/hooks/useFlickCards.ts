import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CARD_POSITIONS } from '@/constants/carousel';

let Draggable: any;
if (typeof window !== 'undefined') {
  Draggable = require('gsap/Draggable').Draggable;
  gsap.registerPlugin(Draggable);
}

type DraggableType = any;

interface UseFlickCardsProps {
  totalCards: number;
  minCards?: number;
  dragThreshold?: number;
}

const DEFAULT_CONFIG = {
  minCards: 3,
  dragThreshold: 0.15,
  animationDuration: 0.6,
  easing: 'elastic.out(1.2, 1)' as const,
  releaseDuration: 0.3,
  releaseEasing: 'power1.out' as const,
};

function calculateDiff(index: number, currentIndex: number, total: number): number {
  let diff = index - currentIndex;
  if (diff > total / 2) diff -= total;
  else if (diff < -total / 2) diff += total;
  return diff;
}

function getCardStatus(index: number, currentIndex: number, total: number): string {
  const diff = calculateDiff(index, currentIndex, total);

  switch (diff) {
    case 0:
      return 'active';
    case 1:
      return '2-after';
    case -1:
      return '2-before';
    case 2:
      return '3-after';
    case -2:
      return '3-before';
    default:
      return 'hidden';
  }
}

function getCardConfig(status: string) {
  switch (status) {
    case 'active':
      return CARD_POSITIONS.ACTIVE;
    case '2-after':
      return CARD_POSITIONS.ADJACENT_RIGHT;
    case '2-before':
      return CARD_POSITIONS.ADJACENT_LEFT;
    case '3-after':
      return CARD_POSITIONS.FAR_RIGHT;
    case '3-before':
      return CARD_POSITIONS.FAR_LEFT;
    default:
      return CARD_POSITIONS.HIDDEN;
  }
}

function animateCard(card: HTMLElement, status: string) {
  const config = getCardConfig(status);
  
  // Update z-index on parent
  const parent = card.parentElement;
  if (parent) {
    parent.style.zIndex = String(config.zIndex);
  }

  gsap.to(card, {
    duration: DEFAULT_CONFIG.animationDuration,
    ease: DEFAULT_CONFIG.easing,
    xPercent: config.x,
    yPercent: config.y,
    rotation: config.rotation,
    scale: config.scale,
    opacity: config.opacity,
  });
}

export function useFlickCards({
  totalCards,
  minCards = DEFAULT_CONFIG.minCards,
  dragThreshold = DEFAULT_CONFIG.dragThreshold,
}: UseFlickCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const draggableInstancesRef = useRef<DraggableType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDraggable = totalCards >= minCards;

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current || !listRef.current) return;

    const container = containerRef.current;
    const list = listRef.current;
    const cardItems = Array.from(
      list.querySelectorAll('[data-flick-cards-item]')
    ) as HTMLElement[];

    if (cardItems.length === 0) return;

    cardsRef.current = cardItems;

    // Initialize card statuses and positions
    const updateCards = (index: number) => {
      cardItems.forEach((card, i) => {
        const status = getCardStatus(i, index, totalCards);
        card.setAttribute('data-flick-cards-item-status', status);
        animateCard(card, status);
      });
    };

    updateCards(activeIndex);

    // Set initial drag status
    if (isDraggable) {
      container.setAttribute('data-flick-drag-status', 'grab');
    }

    if (!isDraggable) {
      return;
    }

    const sliderWidth = container.offsetWidth;
    let pressClientX = 0;
    let currentDragIndex = activeIndex;

    // Create draggable instances for each card
    const draggableInstances = Draggable.create(cardItems, {
      type: 'x',
      edgeResistance: 0.8,
      bounds: { minX: -sliderWidth / 2, maxX: sliderWidth / 2 },
      inertia: false,

      onPress(this: DraggableType) {
        const evt = this.pointerEvent;
        if ('clientX' in evt) {
          pressClientX = evt.clientX;
        }
        container.setAttribute('data-flick-drag-status', 'grabbing');
        currentDragIndex = activeIndex;
      },

      onDrag(this: DraggableType) {
        const rawProgress = this.x / sliderWidth;
        const progress = Math.min(1, Math.abs(rawProgress));
        const direction = rawProgress > 0 ? -1 : 1;
        const nextIndex = (currentDragIndex + direction + totalCards) % totalCards;

        // Interpolate between current and next positions
        cardItems.forEach((card, i) => {
          const fromStatus = getCardStatus(i, currentDragIndex, totalCards);
          const toStatus = getCardStatus(i, nextIndex, totalCards);
          const fromConfig = getCardConfig(fromStatus);
          const toConfig = getCardConfig(toStatus);

          const mix = (prop: 'x' | 'y' | 'rotation' | 'scale' | 'opacity') => {
            return fromConfig[prop] + (toConfig[prop] - fromConfig[prop]) * progress;
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
        container.setAttribute('data-flick-drag-status', 'grab');

        const raw = this.x / sliderWidth;
        let shift = 0;

        if (raw > dragThreshold) shift = -1;
        else if (raw < -dragThreshold) shift = 1;

        if (shift !== 0) {
          const newIndex = (activeIndex + shift + totalCards) % totalCards;
          setActiveIndex(newIndex);
          updateCards(newIndex);
        } else {
          // Return to current position
          updateCards(activeIndex);
        }

        // Reset dragger position
        gsap.to(this.target, {
          x: 0,
          duration: DEFAULT_CONFIG.releaseDuration,
          ease: DEFAULT_CONFIG.releaseEasing,
        });
      },
    });

    draggableInstancesRef.current = draggableInstances;

    return () => {
      draggableInstances.forEach((d: DraggableType) => d.kill());
    };
  }, [totalCards, activeIndex, isDraggable, dragThreshold]);

  return {
    containerRef,
    listRef,
    activeIndex,
    setActiveIndex,
  };
}

