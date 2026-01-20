'use client';

import Image from 'next/image';

interface WaveRightProps {
  className?: string;
}

export function WaveRight({ className = '' }: WaveRightProps) {
  return (
    <div className={`absolute top-0 right-0 z-0 ${className}`}>
      <Image
        src="/visuals/projects-cards/wave-right.svg"
        alt=""
        width={500}
        height={500}
        className="h-[500px] w-[500px] opacity-80"
        aria-hidden="true"
        priority={false}
      />
    </div>
  );
}

