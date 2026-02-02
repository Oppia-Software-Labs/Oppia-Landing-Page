import { type Variants } from 'framer-motion';

interface WhoAreWeVariants {
  container: Variants;
  title: Variants;
  description: Variants;
  cards: Variants;
  cardLeft: Variants;
  cardCenter: Variants;
  cardRight: Variants;
}

export const whoAreWeVariants: WhoAreWeVariants = {
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
  cardLeft: {
    hidden: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  },
  cardCenter: {
    hidden: {
      opacity: 0,
      y: 50,
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
  cardRight: {
    hidden: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  },
};

export type { WhoAreWeVariants };

