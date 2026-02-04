/**
 * Product configuration constants
 */

export type ProductSlug = 'neko' | 'geko' | 'deko';

export interface ProductLogoConfig {
  active: {
    src: string;
    width: number;
    height: number;
    className: string;
  };
  inactive: {
    src: string;
    width: number;
    height: number;
    className: string;
  };
}

export interface CornerIconConfig {
  src: string;
  width: number;
  height: number;
  className: string;
  position: string;
}

export interface ProductConfig {
  slug: ProductSlug;
  logo: ProductLogoConfig;
  cornerIcon?: CornerIconConfig;
  buttonStyle: 'white' | 'gray';
  comingSoon?: boolean;
}

/** Product configurations */
export const PRODUCT_CONFIGS: Record<ProductSlug, ProductConfig> = {
  neko: {
    slug: 'neko',
    logo: {
      active: {
        src: '/oppia-projects/Neko.svg',
        width: 380,
        height: 380,
        className: 'h-[380px] w-[380px] max-md:h-[260px] max-md:w-[260px] max-[389px]:h-[180px] max-[389px]:w-[180px] brightness-0 invert',
      },
      inactive: {
        src: '/oppia-projects/Neko-Project.svg',
        width: 280,
        height: 280,
        className: 'h-[280px] w-[280px] max-md:h-[180px] max-md:w-[180px] max-[389px]:h-[130px] max-[389px]:w-[130px]',
      },
    },
    buttonStyle: 'white',
  },
  geko: {
    slug: 'geko',
    comingSoon: true,
    logo: {
      active: {
        src: '/oppia-projects/Geko.svg',
        width: 350,
        height: 350,
        className: 'h-auto w-56 sm:w-64 md:w-72 lg:w-80 max-md:!w-44 max-[389px]:!w-32',
      },
      inactive: {
        src: '/oppia-projects/Geko.svg',
        width: 200,
        height: 200,
        className: 'h-[200px] w-[200px] max-md:h-[140px] max-md:w-[140px] max-[389px]:h-[100px] max-[389px]:w-[100px]',
      },
    },
    cornerIcon: {
      src: '/oppia-projects/Geko.svg',
      width: 320,
      height: 320,
      className: 'h-auto w-52 sm:w-60 md:w-64 lg:w-72 max-md:!w-40 max-[389px]:!w-28 object-bottom object-right',
      position: 'bottom-0 right-0 max-md:bottom-0 max-md:right-0 max-[389px]:bottom-0 max-[389px]:right-0',
    },
    buttonStyle: 'white',
  },
  deko: {
    slug: 'deko',
    comingSoon: true,
    logo: {
      active: {
        src: '/oppia-projects/Neko.svg',
        width: 380,
        height: 380,
        className: 'h-[380px] w-[380px] max-md:h-[260px] max-md:w-[260px] max-[389px]:h-[180px] max-[389px]:w-[180px] brightness-0 invert',
      },
      inactive: {
        src: '/oppia-projects/Neko-Project.svg',
        width: 280,
        height: 280,
        className: 'h-[280px] w-[280px] max-md:h-[180px] max-md:w-[180px] max-[389px]:h-[130px] max-[389px]:w-[130px]',
      },
    },
    buttonStyle: 'white',
  },
} as const;

/** Logo position configurations */
export const LOGO_POSITIONS = {
  ACTIVE: {
    neko: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/8',
    geko: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/8',
    deko: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/8',
  },
  INACTIVE: {
    neko: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    geko: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    deko: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
} as const;

