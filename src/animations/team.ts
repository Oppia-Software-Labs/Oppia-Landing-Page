import { type Variants } from 'framer-motion';

interface TeamVariants {
  container: Variants;
  title: Variants;
  description: Variants;
  cards: Variants;
  item: Variants;
}

export const teamVariants: TeamVariants = {
  container: {
    hidden: {
      opacity: 0,
      y: 16,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
        staggerChildren: 0.12,
      },
    },
  },
  title: {
    hidden: {
      opacity: 0,
      y: 12,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  },
  description: {
    hidden: {
      opacity: 0,
      y: 12,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  },
  cards: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 12,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  },
};

export type { TeamVariants };

