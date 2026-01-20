'use client';

import { ReactNode } from 'react';
import { WaveLeft } from '@/components/visuals/WaveLeft';
import { WaveRight } from '@/components/visuals/WaveRight';

interface ProductCardBaseProps {
  children: ReactNode;
  className?: string;
}

export function ProductCardBase({ children, className = '' }: ProductCardBaseProps) {
  return (
      <div
        className={`relative h-[600px] w-[450px] max-w-full rounded-3xl bg-black overflow-hidden border-2 ${className}`}
        style={{ borderColor: '#636363' }}
      >
      <WaveLeft />
      <WaveRight />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
