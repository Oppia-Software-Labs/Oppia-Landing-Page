'use client';

import { forwardRef } from 'react';
import { ProductCard } from './ProductCard';

interface GekoCardProps {
  'data-flick-cards-item': string;
  'data-flick-cards-item-status': string;
}

/**
 * GekoCard component
 * Wrapper component for Geko product card
 */
export const GekoCard = forwardRef<HTMLDivElement, GekoCardProps>((props, ref) => {
  return <ProductCard {...props} ref={ref} slug="geko" />;
});

GekoCard.displayName = 'GekoCard';
