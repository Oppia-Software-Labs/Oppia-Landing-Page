import { NAV_SCROLL_OFFSET, NAV_SCROLL_DELAY } from '@/constants/navbar';

/**
 * Hook para scroll suave desde el navbar a una sección.
 */
export function useSmoothScroll() {
  const scrollToElement = (
    selector: string,
    offset: number = NAV_SCROLL_OFFSET,
    delay: number = NAV_SCROLL_DELAY
  ) => {
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, delay);
  };

  return { scrollToElement };
}

