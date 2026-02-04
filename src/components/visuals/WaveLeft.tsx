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
        className="h-[500px] w-[420px] max-md:h-[400px] max-md:w-[340px] max-sm:h-[350px] max-sm:w-[295px] max-[389px]:h-[300px] max-[389px]:w-[252px] opacity-80"
        aria-hidden="true"
        priority={false}
      />
    </div>
  );
}

