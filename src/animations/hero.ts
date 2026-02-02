import { type Variants } from 'framer-motion';

interface HeroVariants {
  container: Variants;
  badge: Variants;
  title: Variants;
  description: Variants;
  buttons: Variants;
}

export const heroVariants: HeroVariants = {
  container: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  },
  badge: {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  title: {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  description: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  buttons: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
};

export type { HeroVariants };

