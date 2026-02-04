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
        className={`relative h-[540px] w-[400px] max-w-full rounded-2xl bg-black overflow-hidden border-2 max-md:h-[380px] max-md:w-[280px] max-md:rounded-xl max-[389px]:h-[320px] max-[389px]:w-[240px] max-[389px]:rounded-lg ${className}`}
        style={{ borderColor: '#636363' }}
      >
      <WaveLeft className="translate-y-[5%]" />
      <WaveRight className="translate-x-[18%] -translate-y-[5%] max-md:translate-x-[8%] max-[389px]:translate-x-[4%]" />
      <div className="relative z-10 h-full overflow-hidden">{children}</div>
    </div>
  );
}
