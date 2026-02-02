import { useEffect, RefObject } from 'react';
import { ANIMATION_TIMING, VIDEO_VISIBILITY_CONFIG } from '@/constants/projects';


export function useVideoPlaybackControl(
  videoRef: RefObject<HTMLVideoElement | null>,
  dependencies: unknown[] = []
): void {
  useEffect(() => {
    if (typeof window === 'undefined' || !videoRef.current) {
      return;
    }

    const video = videoRef.current;
    let animationFrameId: number;
    let userInteracted = false;
    let playAttempted = false;


    const errorHandler = (event: ErrorEvent): boolean | void => {
      if (
        event.error?.name === 'NotAllowedError' &&
        event.message?.includes("play() failed because the user didn't interact")
      ) {
        event.preventDefault();
        return false;
      }
    };
    
    window.addEventListener('error', errorHandler);


    const handleUserInteraction = (): void => {
      if (!userInteracted) {
        userInteracted = true;
        playAttempted = false;

        setTimeout(() => {
          const targetEl = document.querySelector("[data-flip-element='target']") as HTMLElement;
          if (targetEl && video.paused) {
            const rect = targetEl.getBoundingClientRect();
            const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
            if (isVisible) {
              video.muted = false;
              video.play()
                .then(() => {
                  playAttempted = true;
                })
                .catch(() => {
                  playAttempted = false;
                });
            }
          }
        }, VIDEO_VISIBILITY_CONFIG.INTERACTION_DELAY);
      }
    };


    const isElementVisible = (rect: DOMRect, viewportHeight: number, viewportWidth: number): boolean => {
      return (
        rect.bottom > 0 &&
        rect.top < viewportHeight &&
        rect.right > 0 &&
        rect.left < viewportWidth
      );
    };


    const checkSmallSectionVisibility = (
      rect: DOMRect | undefined,
      viewportHeight: number
    ): boolean => {
      if (!rect) return false;
      const startThreshold = viewportHeight * VIDEO_VISIBILITY_CONFIG.SMALL_SECTION_START;
      const endThreshold = viewportHeight * VIDEO_VISIBILITY_CONFIG.SMALL_SECTION_END;
      return rect.bottom > startThreshold && rect.top < endThreshold;
    };


    const isElementOutOfView = (
      rect: DOMRect,
      viewportHeight: number,
      viewportWidth: number,
      margin: number
    ): boolean => {
      return (
        rect.bottom < -margin ||
        rect.top > viewportHeight + margin ||
        rect.right < -margin ||
        rect.left > viewportWidth + margin
      );
    };


    const attemptPlay = (): void => {
      if (video.paused && userInteracted) {
        try {
          video.muted = false;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                playAttempted = true;
              })
              .catch((error: Error) => {
                if (error.name === 'NotAllowedError') {
                  playAttempted = false;
                  return;
                }
                playAttempted = false;
                setTimeout(() => {
                  playAttempted = false;
                }, VIDEO_VISIBILITY_CONFIG.RETRY_DELAY);
              });
          }
        } catch (error: unknown) {
          if (error instanceof Error && error.name !== 'NotAllowedError') {
          }
          playAttempted = false;
        }
      }
    };


    const shouldPause = (
      largeSectionRect: DOMRect | undefined,
      smallSectionRect: DOMRect | undefined,
      targetRect: DOMRect,
      viewportHeight: number,
      viewportWidth: number
    ): boolean => {
      const margin = VIDEO_VISIBILITY_CONFIG.PAUSE_MARGIN;

      const isPastLargeSection = largeSectionRect
        ? largeSectionRect.bottom < -margin
        : false;

      const isBeforeSmallSection = smallSectionRect
        ? smallSectionRect.top > viewportHeight + margin
        : false;

      const isTargetOutOfView = isElementOutOfView(targetRect, viewportHeight, viewportWidth, margin);

      return isPastLargeSection || isBeforeSmallSection || isTargetOutOfView;
    };

    const checkVideoVisibility = (): void => {
      const targetEl = document.querySelector("[data-flip-element='target']") as HTMLElement;
      const wrapperElements = document.querySelectorAll("[data-flip-element='wrapper']");

      if (!targetEl || wrapperElements.length < 2) {
        animationFrameId = requestAnimationFrame(checkVideoVisibility);
        return;
      }

      const firstWrapper = wrapperElements[0] as HTMLElement;
      const lastWrapper = wrapperElements[wrapperElements.length - 1] as HTMLElement;
      const largeVideoSection = lastWrapper.closest('section') as HTMLElement;
      const smallVideoSection = firstWrapper.closest('section') as HTMLElement;

      const targetRect = targetEl.getBoundingClientRect();
      const largeSectionRect = largeVideoSection?.getBoundingClientRect();
      const smallSectionRect = smallVideoSection?.getBoundingClientRect();

      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const isTargetVisible = isElementVisible(targetRect, viewportHeight, viewportWidth);
      const isLargeSectionVisible = largeSectionRect
        ? isElementVisible(largeSectionRect, viewportHeight, viewportWidth)
        : false;
      const isSmallSectionVisible = checkSmallSectionVisibility(smallSectionRect, viewportHeight);

      if ((isTargetVisible || isLargeSectionVisible || isSmallSectionVisible) && userInteracted) {
        attemptPlay();
      } else if (!userInteracted && (isTargetVisible || isLargeSectionVisible || isSmallSectionVisible)) {
      } else {
        if (shouldPause(largeSectionRect, smallSectionRect, targetRect, viewportHeight, viewportWidth)) {
          if (!video.paused) {
            video.pause();
          }
        }
      }

      animationFrameId = requestAnimationFrame(checkVideoVisibility);
    };

    const events = ['click', 'touchstart', 'scroll', 'keydown', 'mousedown'] as const;
    const removeEventListeners: (() => void)[] = [];

    events.forEach((event) => {
      document.addEventListener(event, handleUserInteraction, { passive: true });
      removeEventListeners.push(() => {
        document.removeEventListener(event, handleUserInteraction);
      });
    });

    const initTimeout = setTimeout(() => {
      checkVideoVisibility();
    }, ANIMATION_TIMING.INIT_DELAY + VIDEO_VISIBILITY_CONFIG.INIT_DELAY_OFFSET);

    return () => {
      clearTimeout(initTimeout);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      removeEventListeners.forEach((remove) => remove());
      window.removeEventListener('error', errorHandler);
    };
  }, [videoRef, ...dependencies]);
}

