import { type Variants } from 'framer-motion';

interface NavbarVariants {
  topBar: Variants;
  menuButton: Variants;
  logo: Variants;
  topButtons: Variants;
  menuContent: Variants;
  menuSection: Variants;
  menuItem: Variants;
  visual: Variants;
}

export const navbarVariants: NavbarVariants = {
  topBar: {
    hidden: {
      opacity: 0,
      y: -20,
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
  menuButton: {
    hidden: {
      opacity: 0,
      x: -20,
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
  logo: {
    hidden: {
      opacity: 0,
      scale: 0.9,
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
  topButtons: {
    hidden: {
      opacity: 0,
      x: 20,
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
  menuContent: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  },
  menuSection: {
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
  menuItem: {
    hidden: {
      opacity: 0,
      x: -10,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  },
  visual: {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
};

/** En mobile no animar el menú para evitar parpadeo */
export const navbarVariantsMobile = {
  menuContent: {
    hidden: {},
    show: { transition: { delayChildren: 0, staggerChildren: 0 } },
  },
  menuSection: {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { duration: 0 } },
  },
  menuItem: {
    hidden: { opacity: 1, x: 0 },
    show: { opacity: 1, x: 0, transition: { duration: 0 } },
  },
  visual: {
    hidden: { opacity: 1, scale: 1 },
    show: { opacity: 1, scale: 1, transition: { duration: 0 } },
  },
} as const;

export type { NavbarVariants };

