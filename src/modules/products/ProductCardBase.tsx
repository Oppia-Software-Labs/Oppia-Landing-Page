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
        className={`relative h-[540px] w-[400px] max-w-full rounded-2xl bg-black overflow-hidden border-2 max-md:h-[380px] max-md:w-[280px] max-md:rounded-xl max-[414px]:h-[320px] max-[414px]:w-[240px] max-[414px]:rounded-lg ${className}`}
        style={{ borderColor: '#636363' }}
      >
      <WaveLeft className="translate-y-[5%]" />
      <WaveRight className="translate-x-[18%] -translate-y-[5%]" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
