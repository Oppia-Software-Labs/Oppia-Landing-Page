export const CTA_CONFIG = {
  LARGE_ICONS: {
    INSTAGRAM: {
      size: 'w-20 h-20 max-md:w-16 max-md:h-16 max-[414px]:w-14 max-[414px]:h-14',
      iconSize: 'h-9 w-9 max-md:h-7 max-md:w-7 max-[414px]:h-6 max-[414px]:w-6',
      rotation: 'rotate-12',
      translateY: '-translate-y-3 max-md:-translate-y-2 max-[414px]:-translate-y-1',
    },
    TWITTER: {
      size: 'w-24 h-24 max-md:w-20 max-md:h-20 max-[414px]:w-16 max-[414px]:h-16',
      iconSize: 'h-11 w-11 max-md:h-9 max-md:w-9 max-[414px]:h-7 max-[414px]:w-7',
      rotation: '-rotate-6',
      translateY: 'translate-y-1.5 max-md:translate-y-1 max-[414px]:translate-y-0.5',
    },
    DISCORD: {
      size: 'w-[5.5rem] h-[5.5rem] max-md:w-[4rem] max-md:h-[4rem] max-[414px]:w-14 max-[414px]:h-14',
      iconSize: 'h-10 w-10 max-md:h-8 max-md:w-8 max-[414px]:h-6 max-[414px]:w-6',
      rotation: 'rotate-8',
      translateY: '-translate-y-4 max-md:-translate-y-2 max-[414px]:-translate-y-1.5',
    },
    LINKEDIN: {
      size: 'w-[5.5rem] h-[5.5rem] max-md:w-[4rem] max-md:h-[4rem] max-[414px]:w-14 max-[414px]:h-14',
      iconSize: 'h-10 w-10 max-md:h-8 max-md:w-8 max-[414px]:h-6 max-[414px]:w-6',
      rotation: '-rotate-12',
      translateY: 'translate-y-3 max-md:translate-y-1.5 max-[414px]:translate-y-1',
    },
    GITHUB: {
      size: 'w-20 h-20 max-md:w-16 max-md:h-16 max-[414px]:w-14 max-[414px]:h-14',
      iconSize: 'h-9 w-9 max-md:h-7 max-md:w-7 max-[414px]:h-6 max-[414px]:w-6',
      rotation: 'rotate-6',
      translateY: '-translate-y-1.5 max-md:-translate-y-1 max-[414px]:-translate-y-0.5',
    },
  },
  WAVES: {
    LEFT: {
      width: 1400,
      height: 600,
    },
    RIGHT: {
      width: 1200,
      height: 800,
    },
  },
} as const;

