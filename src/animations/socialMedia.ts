import { type Variants } from 'framer-motion';

interface SocialMediaVariants {
  container: Variants;
  header: Variants;
  marquee: Variants;
}

export const socialMediaVariants: SocialMediaVariants = {
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
  marquee: {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  },
};

export type { SocialMediaVariants };

