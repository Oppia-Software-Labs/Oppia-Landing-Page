import { type Variants } from 'framer-motion';

interface PartnersVariants {
  container: Variants;
  title: Variants;
  logos: Variants;
  logo: Variants;
}

export const partnersVariants: PartnersVariants = {
  container: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  },
  title: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
  logos: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  },
  logo: {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  },
};

export type { PartnersVariants };

