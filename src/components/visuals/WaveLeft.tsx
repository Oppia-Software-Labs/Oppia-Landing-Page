'use client';

import Image from 'next/image';

interface WaveLeftProps {
  className?: string;
}

export function WaveLeft({ className = '' }: WaveLeftProps) {
  return (
    <div className={`absolute bottom-0 left-0 z-0 ${className}`}>
      <Image
        src="/visuals/projects-cards/left-wave.svg"
        alt=""
        width={400}
        height={480}
        className="h-[500px] w-[420px] opacity-80"
        aria-hidden="true"
        priority={false}
      />
    </div>
  );
}

