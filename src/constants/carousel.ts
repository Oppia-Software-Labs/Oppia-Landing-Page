export const CAROUSEL_CONFIG = {
  MIN_CARDS: 3,
  DRAG_THRESHOLD: 0.1,
  ANIMATION_DURATION: 0.6,
  EASING: 'elastic.out(1.2, 1)' as const,
  RELEASE_DURATION: 0.3,
  RELEASE_EASING: 'power1.out' as const,
  CLICK_THRESHOLD: 4,
  EDGE_RESISTANCE: 0.8,
} as const;

export const CARD_POSITIONS = {
  ACTIVE: {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    opacity: 1,
    zIndex: 50,
    status: 'active' as const,
  },
  ADJACENT_RIGHT: {
    x: 55,
    y: 3,
    rotation: 0,
    scale: 0.85,
    opacity: 0.9,
    zIndex: 10,
    status: '2-after' as const,
  },
  ADJACENT_LEFT: {
    x: -55,
    y: 3,
    rotation: 0,
    scale: 0.85,
    opacity: 0.9,
    zIndex: 10,
    status: '2-before' as const,
  },
  FAR_RIGHT: {
    x: 80,
    y: 8,
    rotation: 0,
    scale: 0.7,
    opacity: 0.5,
    zIndex: 5,
    status: '3-after' as const,
  },
  FAR_LEFT: {
    x: -80,
    y: 8,
    rotation: 0,
    scale: 0.7,
    opacity: 0.5,
    zIndex: 5,
    status: '3-before' as const,
  },
  HIDDEN: {
    x: 100,
    y: 12,
    rotation: 0,
    scale: 0.5,
    opacity: 0,
    zIndex: 1,
    status: 'hidden' as const,
  },
} as const;

export type CardStatus = 
  | 'active' 
  | '2-before' 
  | '2-after' 
  | '3-before' 
  | '3-after' 
  | 'hidden';

