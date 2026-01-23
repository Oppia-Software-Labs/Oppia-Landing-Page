/**
 * GSAP Flip animation utilities
 * Handles initialization and cleanup of scroll-based Flip animations
 */

import { ANIMATION_TIMING, SCROLL_TRIGGER_CONFIG } from '@/constants/projects';

/**
 * GSAP Timeline interface
 * Represents a GSAP timeline with kill method
 */
interface GSAPTimeline {
  kill(): void;
  add(tween: unknown): GSAPTimeline;
}

/**
 * GSAP ScrollTrigger interface
 * Represents ScrollTrigger plugin with common methods
 */
interface GSAPScrollTrigger {
  getAll(): Array<{ kill(): void }>;
  refresh(): void;
  create(config: {
    trigger: HTMLElement;
    start: string;
    endTrigger?: HTMLElement;
    end: string;
    scrub: number;
  }): { kill(): void };
}

/**
 * GSAP Flip interface
 * Represents Flip plugin with fit method
 */
interface GSAPFlip {
  fit(
    element: Element,
    target: HTMLElement,
    config: { duration: number; ease: string }
  ): unknown;
}

/**
 * GSAP core interface
 */
interface GSAPCore {
  timeline(config?: {
    scrollTrigger?: {
      trigger: HTMLElement;
      start: string;
      endTrigger?: HTMLElement;
      end: string;
      scrub: number;
    };
  }): GSAPTimeline;
  set(target: Element, props: { clearProps: string }): void;
  registerPlugin(...plugins: unknown[]): void;
}

/**
 * GSAP plugins interface
 */
interface GSAPPlugins {
  gsap: GSAPCore;
  ScrollTrigger: GSAPScrollTrigger;
  Flip: GSAPFlip;
}

/**
 * Calculates the distance between two wrapper elements
 * @param thisWrapper - First wrapper element
 * @param nextWrapper - Second wrapper element
 * @returns Distance in pixels
 */
function calculateWrapperDistance(
  thisWrapper: HTMLElement,
  nextWrapper: HTMLElement
): number {
  const nextRect = nextWrapper.getBoundingClientRect();
  const thisRect = thisWrapper.getBoundingClientRect();
  const scrollY = window.pageYOffset || window.scrollY || 0;
  const nextDistance = nextRect.top + scrollY + nextWrapper.offsetHeight / 2;
  const thisDistance = thisRect.top + scrollY + thisWrapper.offsetHeight / 2;
  return nextDistance - thisDistance;
}

/**
 * Creates a Flip timeline animation
 * @param gsap - GSAP instance
 * @param ScrollTrigger - ScrollTrigger plugin
 * @param Flip - Flip plugin
 * @param wrapperElements - Array of wrapper elements
 * @param targetEl - Target element to animate
 * @returns GSAP Timeline instance or null if creation fails
 */
function createFlipTimeline(
  gsap: GSAPCore,
  ScrollTrigger: GSAPScrollTrigger,
  Flip: GSAPFlip,
  wrapperElements: NodeListOf<Element>,
  targetEl: Element
): GSAPTimeline | null {
  if (wrapperElements.length < 2 || !targetEl) {
    return null;
  }

  // Kill any existing ScrollTriggers first
  ScrollTrigger.getAll().forEach((st) => st.kill());

  // Refresh ScrollTrigger to recalculate positions
  ScrollTrigger.refresh();

  // Create timeline with scroll trigger
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperElements[0] as HTMLElement,
      start: SCROLL_TRIGGER_CONFIG.START,
      endTrigger: wrapperElements[wrapperElements.length - 1] as HTMLElement,
      end: SCROLL_TRIGGER_CONFIG.END,
      scrub: SCROLL_TRIGGER_CONFIG.SCRUB,
    },
  });

  // Loop through each wrapper element and add Flip animations
  wrapperElements.forEach((element, index) => {
    const nextIndex = index + 1;
    if (nextIndex < wrapperElements.length) {
      const nextWrapperEl = wrapperElements[nextIndex] as HTMLElement;
      const thisWrapperEl = element as HTMLElement;
      const offset = calculateWrapperDistance(thisWrapperEl, nextWrapperEl);

      // Add the Flip.fit tween to the timeline
      timeline.add(
        Flip.fit(targetEl, nextWrapperEl, {
          duration: offset,
          ease: 'none',
        })
      );
    }
  });

  return timeline;
}

/**
 * Validates that GSAP plugins are loaded
 * @param plugins - GSAP plugins object
 * @returns true if all plugins are loaded
 */
function validateGSAPPlugins(plugins: Partial<GSAPPlugins>): plugins is GSAPPlugins {
  return !!(plugins.gsap && plugins.ScrollTrigger && plugins.Flip);
}

/**
 * Gets GSAP plugins from window/require
 * @returns GSAP plugins or null if not available
 */
function getGSAPPlugins(): Partial<GSAPPlugins> | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const gsap = require('gsap').gsap;
    const ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
    const Flip = require('gsap/Flip').Flip;

    if (gsap && ScrollTrigger && Flip) {
      gsap.registerPlugin(ScrollTrigger, Flip);
      return { gsap, ScrollTrigger, Flip };
    }
  } catch (error) {
    // GSAP not available
  }

  return null;
}

/**
 * Cleanup function for Flip animation
 */
export interface FlipAnimationCleanup {
  (): void;
}

/**
 * Initializes the Flip scroll animation
 * @returns Cleanup function or null if initialization failed
 */
export function initFlipOnScroll(): FlipAnimationCleanup | null {
  const plugins = getGSAPPlugins();

  if (!plugins || !validateGSAPPlugins(plugins)) {
    return null;
  }

  const { gsap, ScrollTrigger, Flip } = plugins;

  const wrapperElements = document.querySelectorAll("[data-flip-element='wrapper']");
  const targetEl = document.querySelector("[data-flip-element='target']");

  if (!wrapperElements.length || !targetEl || wrapperElements.length < 2) {
    return null;
  }

  let timeline: GSAPTimeline | null = null;

  /**
   * Recreates the Flip timeline
   */
  function recreateTimeline(): void {
    if (!targetEl) {
      return;
    }

    // Kill existing timeline
    if (timeline) {
      timeline.kill();
      gsap.set(targetEl, { clearProps: 'all' });
    }

    // Create new timeline
    timeline = createFlipTimeline(gsap, ScrollTrigger, Flip, wrapperElements, targetEl);
  }

  // Initial timeline creation
  recreateTimeline();

  // Resize handler with debounce
  let resizeTimer: NodeJS.Timeout;
  const handleResize = (): void => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      recreateTimeline();
    }, ANIMATION_TIMING.RESIZE_DEBOUNCE);
  };

  window.addEventListener('resize', handleResize);

  // Return cleanup function
  return (): void => {
    window.removeEventListener('resize', handleResize);
    if (timeline) {
      timeline.kill();
    }
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}

