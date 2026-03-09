/**
 * Project CTA configuration constants
 */

import { ProductSlug } from './products';

export interface ProjectCtaLinks {
  website?: string;
  twitter?: string;
}

export interface ProjectCtaConfig {
  slug: ProductSlug;
  logoPath: string;
  logotypePath: string;
  links: ProjectCtaLinks;
  gradient: {
    from: string;
    to: string;
  };
}

/** Project CTA configurations */
export const PROJECT_CTA_CONFIGS: Record<ProductSlug, ProjectCtaConfig> = {
  neko: {
    slug: 'neko',
    logoPath: '/oppia-projects/Nekotwo.svg',
    logotypePath: '/oppia-projects/Logotypes/neko-logotype.svg',
    links: {
      website: 'https://nekoprotocol.xyz',
      twitter: 'https://x.com/NekoProto',
    },
    gradient: {
      from: '#03A7FF',
      to: '#00398F',
    },
  },
  geko: {
    slug: 'geko',
    logoPath: '/oppia-projects/Gekotwo.svg',
    logotypePath: '/oppia-projects/Logotypes/geko-logotype.svg',
    links: {
      website: 'https://www.geko.app/',
      twitter: 'https://x.com/GekoApp',
    },
    gradient: {
      from: '#03A7FF',
      to: '#00398F',
    },
  },
  deko: {
    slug: 'deko',
    logoPath: '/oppia-projects/Nekotwo.svg',
    logotypePath: '/oppia-projects/Logotypes/deko-logotype.svg',
    links: {
      website: 'https://www.deko.app/',
      twitter: 'https://x.com/DekoApp',
    },
    gradient: {
      from: '#03A7FF',
      to: '#00398F',
    },
  },
} as const;

