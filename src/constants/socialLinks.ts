export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://www.instagram.com/oppia.labs/',
  TWITTER: 'https://x.com/OppiaLabs',
  LINKEDIN: 'https://www.linkedin.com/company/oppia-software-labs',
  GITHUB: 'https://github.com/Oppia-Software-Labs',
  DISCORD: 'https://discord.gg/tY5Zputa',
} as const;

export const CTA_SOCIAL_LINKS = [
  {
    href: SOCIAL_LINKS.INSTAGRAM,
    labelKey: 'cta.socials.instagram',
  },
  {
    href: SOCIAL_LINKS.TWITTER,
    labelKey: 'cta.socials.twitter',
  },
  {
    href: SOCIAL_LINKS.DISCORD,
    labelKey: 'cta.socials.discord',
  },
  {
    href: SOCIAL_LINKS.LINKEDIN,
    labelKey: 'cta.socials.linkedin',
  },
] as const;

export const FOOTER_SOCIAL_LINKS = [
  {
    href: SOCIAL_LINKS.INSTAGRAM,
    name: 'Instagram',
  },
  {
    href: SOCIAL_LINKS.TWITTER,
    name: 'X',
  },
  {
    href: SOCIAL_LINKS.LINKEDIN,
    name: 'LinkedIn',
  },
  {
    href: SOCIAL_LINKS.GITHUB,
    name: 'GitHub',
  },
  {
    href: SOCIAL_LINKS.DISCORD,
    name: 'Discord',
  },
] as const;

