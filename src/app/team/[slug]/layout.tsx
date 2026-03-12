'use client';

import Image from 'next/image';

const WAVE_SRC_TOP_RIGHT = '/portfolio/waves/top-right-wave.svg';
const WAVE_SRC_BOTTOM_LEFT = '/portfolio/waves/down-left-wave.svg';

export default function TeamMemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Top-right decorative wave - fixed to viewport, flush with top-right edge (breaks out of any container) */}
      <div
        className="pointer-events-none fixed top-0 right-0 z-0 h-[min(55vh,520px)] w-[420px] max-w-[80vw] sm:h-[min(65vh,700px)] sm:w-[520px] md:h-[min(80vh,900px)] md:w-[650px]"
        aria-hidden
      >
        <Image
          src={WAVE_SRC_TOP_RIGHT}
          alt=""
          width={834}
          height={1147}
          className="h-full w-full object-contain object-top-right"
          priority
        />
      </div>
      {/* Bottom-left decorative wave - fixed to viewport, aligned to bottom-left */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 z-0 h-[min(55vh,520px)] w-[380px] max-w-[75vw] sm:h-[min(65vh,800px)] sm:w-[460px] md:h-[min(80vh,1174px)] md:w-[582px]"
        aria-hidden
      >
        <Image
          src={WAVE_SRC_BOTTOM_LEFT}
          alt=""
          width={582}
          height={1174}
          className="h-full w-full object-contain object-bottom-left"
          priority
        />
      </div>
      <main className="relative z-10">{children}</main>
    </div>
  );
}
