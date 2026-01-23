'use client';

import { forwardRef } from 'react';
import { ProductCard } from './ProductCard';

interface DekoCardProps {
  'data-flick-cards-item': string;
  'data-flick-cards-item-status': string;
}

/**
 * DekoCard component
 * Wrapper component for Deko product card
 */
export const DekoCard = forwardRef<HTMLDivElement, DekoCardProps>((props, ref) => {
  return <ProductCard {...props} ref={ref} slug="deko" />;
});

DekoCard.displayName = 'DekoCard';
