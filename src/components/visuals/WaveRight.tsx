'use client';

import Image from 'next/image';

interface WaveRightProps {
  className?: string;
}

export function WaveRight({ className = '' }: WaveRightProps) {
  return (
    <div className={`absolute top-0 right-0 z-0 ${className}`}>
      <Image
        src="/visuals/projects-cards/right-wave.svg"
        alt=""
        width={500}
        height={500}
        className="h-[550px] w-[550px] opacity-80"
        aria-hidden="true"
        priority={false}
      />
    </div>
  );
}

