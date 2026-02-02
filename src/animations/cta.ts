import { type Variants } from 'framer-motion';

interface CTAVariants {
  container: Variants;
  header: Variants;
  leftSide: Variants;
  logo: Variants;
  description: Variants;
  socialCards: Variants;
  socialCard: Variants;
  rightSide: Variants;
  socialIcons: Variants;
  socialIcon: Variants;
}

export const ctaVariants: CTAVariants = {
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
        staggerChildren: 0.1,
      },
    },
  },
  header: {
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
  leftSide: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  logo: {
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    show: {
      opacity: 1,
      scale: 1,
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
  socialCards: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
  socialCard: {
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
  rightSide: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  socialIcons: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
  socialIcon: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  },
};

export type { CTAVariants };

