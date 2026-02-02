import { type Variants } from 'framer-motion';

interface FAQVariants {
  container: Variants;
  title: Variants;
  description: Variants;
  items: Variants;
  item: Variants;
}

export const faqVariants: FAQVariants = {
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
  items: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },
};

export type { FAQVariants };

