'use client';

import { forwardRef } from 'react';
import { ProductCard } from './ProductCard';

interface NekoCardProps {
  'data-flick-cards-item': string;
  'data-flick-cards-item-status': string;
}

/**
 * NekoCard component
 * Wrapper component for Neko product card
 */
export const NekoCard = forwardRef<HTMLDivElement, NekoCardProps>((props, ref) => {
  return <ProductCard {...props} ref={ref} slug="neko" />;
});

NekoCard.displayName = 'NekoCard';
