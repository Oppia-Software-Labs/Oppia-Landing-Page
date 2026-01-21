import { useEffect } from 'react';
import { gsap } from 'gsap';

let InertiaPlugin: any;
if (typeof window !== 'undefined') {
  InertiaPlugin = require('gsap/InertiaPlugin').InertiaPlugin;
  gsap.registerPlugin(InertiaPlugin);
}

/**
 * Configuration options for the momentum hover effect
 */
interface UseMomentumHoverConfig {
  /** Multiplier for X/Y movement velocity (default: 30) */
  xyMultiplier?: number;
  /** Multiplier for rotation velocity (default: 20) */
  rotationMultiplier?: number;
  /** Resistance value for inertia animation (default: 200) */
  inertiaResistance?: number;
}

const DEFAULT_CONFIG: Required<UseMomentumHoverConfig> = {
  xyMultiplier: 30,
  rotationMultiplier: 20,
  inertiaResistance: 200,
};

/**
 * Custom hook that adds momentum-based hover effects to elements
 * 
 * Elements must have the following data attributes:
 * - `data-momentum-hover-init`: Applied to the root container
 * - `data-momentum-hover-element`: Applied to each hoverable element
 * - `data-momentum-hover-target`: Applied to the element that will be animated
 * 
 * @param config - Configuration object to customize the hover effect behavior
 * 
 * @example
 * ```tsx
 * useMomentumHover({ xyMultiplier: 30, rotationMultiplier: 20 });
 * ```
 */
export function useMomentumHover(config: UseMomentumHoverConfig = {}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const {
      xyMultiplier,
      rotationMultiplier,
      inertiaResistance,
    } = { ...DEFAULT_CONFIG, ...config };

    const clampXY = gsap.utils.clamp(-1080, 1080);
    const clampRot = gsap.utils.clamp(-60, 60);

    document.querySelectorAll('[data-momentum-hover-init]').forEach((root) => {
      let prevX = 0;
      let prevY = 0;
      let velX = 0;
      let velY = 0;
      let rafId: number | null = null;

      root.addEventListener('mousemove', (e: MouseEvent) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          velX = e.clientX - prevX;
          velY = e.clientY - prevY;
          prevX = e.clientX;
          prevY = e.clientY;
          rafId = null;
        });
      });

      root.querySelectorAll('[data-momentum-hover-element]').forEach((el) => {
        el.addEventListener('mouseenter', (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const target = el.querySelector('[data-momentum-hover-target]') as HTMLElement;
          if (!target) return;

          const { left, top, width, height } = target.getBoundingClientRect();
          const centerX = left + width / 2;
          const centerY = top + height / 2;
          const offsetX = mouseEvent.clientX - centerX;
          const offsetY = mouseEvent.clientY - centerY;

          const rawTorque = offsetX * velY - offsetY * velX;
          const leverDist = Math.hypot(offsetX, offsetY) || 1;
          const angularForce = rawTorque / leverDist;

          const velocityX = clampXY(velX * xyMultiplier);
          const velocityY = clampXY(velY * xyMultiplier);
          const rotationVelocity = clampRot(angularForce * rotationMultiplier);

          gsap.to(target, {
            inertia: {
              x: { velocity: velocityX, end: 0 },
              y: { velocity: velocityY, end: 0 },
              rotation: { velocity: rotationVelocity, end: 0 },
              resistance: inertiaResistance,
            },
          });
        });
      });
    });
  }, [config]);
}
