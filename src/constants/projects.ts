/**
 * Constants for project pages configuration
 */

/** Animation timing constants */
export const ANIMATION_TIMING = {
  /** Delay before initializing Flip animation (ms) */
  INIT_DELAY: 200,
  /** Delay for resize handler debounce (ms) */
  RESIZE_DEBOUNCE: 100,
} as const;

/** ScrollTrigger configuration */
export const SCROLL_TRIGGER_CONFIG = {
  START: 'center center',
  END: 'center center',
  SCRUB: 0.25,
} as const;

/** Video playback visibility thresholds */
export const VIDEO_VISIBILITY_CONFIG = {
  /** Small section visibility threshold (percentage of viewport) */
  SMALL_SECTION_START: 0.2,
  SMALL_SECTION_END: 0.8,
  /** Margin for pausing video when out of viewport (px) */
  PAUSE_MARGIN: 50,
  /** Delay after user interaction before attempting playback (ms) */
  INTERACTION_DELAY: 100,
  /** Minimum video readyState before attempting playback */
  MIN_READY_STATE: 2,
  /** Retry delay after failed playback attempt (ms) */
  RETRY_DELAY: 1000,
  /** Delay before initializing video control (ms) */
  INIT_DELAY_OFFSET: 300,
} as const;

/** Logo path configuration */
export const LOGO_PATH_PREFIX = '/oppia-projects/Logotypes';
export const LOGO_PATH_SUFFIX = '-logotype.svg';

/**
 * Gets the logo path for a project slug
 * @param slug - Project slug (neko, geko, deko)
 * @returns Logo file path
 */
export const getProjectLogoPath = (slug: string): string => {
  return `${LOGO_PATH_PREFIX}/${slug}${LOGO_PATH_SUFFIX}`;
};

