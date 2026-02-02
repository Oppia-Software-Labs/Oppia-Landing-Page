import { type Variants } from 'framer-motion';

interface ProjectPageVariants {
  discoverTitle: Variants;
  poweredBy: Variants;
  poweredByTitle: Variants;
  poweredByLogos: Variants;
  poweredByLogo: Variants;
}

export const projectPageVariants: ProjectPageVariants = {
  discoverTitle: {
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
  poweredBy: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  },
  poweredByTitle: {
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
  poweredByLogos: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  },
  poweredByLogo: {
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

export type { ProjectPageVariants };

