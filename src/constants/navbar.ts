/**
 * Navigation constants
 */

export const NAV_SCROLL_OFFSET = 100;
export const NAV_SCROLL_DELAY = 100;

export const NAV_STATUS = {
  ACTIVE: 'active',
  NOT_ACTIVE: 'not-active',
} as const;

export type NavStatus = typeof NAV_STATUS[keyof typeof NAV_STATUS];

