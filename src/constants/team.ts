/**
 * Constants for team section styling and configuration
 */

/** Team card dimensions and styling */
export const TEAM_CARD = {
  /** Card width in pixels */
  WIDTH: 300,
  /** Aspect ratio for team cards (height/width) */
  ASPECT_RATIO: 1.5,
  /** Padding values */
  PADDING: {
    TOP: '0',
    SIDES: '2em',
    BOTTOM: '1em',
  },
  /** Content margin from top - used to push content down */
  CONTENT_TOP_MARGIN: '0',
  /** Border radius */
  BORDER_RADIUS: '1.5em',
  /** Border width */
  BORDER_WIDTH: '1px',
  /** Border color opacity */
  BORDER_OPACITY: 0.15,
} as const;

/** Team card colors */
export const TEAM_CARD_COLORS = {
  /** Verified check badge color */
  VERIFIED_BADGE: '#D3FF5B',
  /** Border color (white with opacity) */
  BORDER: 'rgba(255, 255, 255, 0.15)',
  /** Text colors */
  TEXT: {
    PRIMARY: '#FFFFFF',
    SECONDARY: 'rgba(255, 255, 255, 0.67)',
    HOVER: 'rgba(255, 255, 255, 0.7)',
  },
  /** Shadow colors */
  SHADOW: {
    DEFAULT: 'rgba(0, 0, 0, 0.3)',
    ACTIVE: 'rgba(211, 255, 91, 0.1)',
  },
} as const;

/** Social icon sizes */
export const SOCIAL_ICON = {
  /** Icon size in pixels */
  SIZE: 20, // h-5 w-5
} as const;

/** Team card spacing */
export const TEAM_SPACING = {
  /** Gap between cards */
  CARD_GAP: '2rem',
  /** Gap between name elements */
  NAME_GAP: '0.25em',
  /** Gap between social icons */
  ICON_GAP: '0.75rem',
  /** Margin top for social links */
  SOCIAL_MARGIN_TOP: '1rem',
} as const;

