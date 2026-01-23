import { useEffect, useRef } from 'react';

/**
 * Custom hook for directional button hover effect
 * Creates a circle that follows the mouse position on hover
 */
export function useDirectionalButtonHover() {
  const buttonRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;

    if (!button || !circle) return;

    const updateCirclePosition = (
      event: MouseEvent,
      button: HTMLElement,
      circle: HTMLElement
    ) => {
      const buttonRect = button.getBoundingClientRect();

      // Get the button's dimensions and center
      const buttonWidth = buttonRect.width;
      const buttonHeight = buttonRect.height;
      const buttonCenterX = buttonRect.left + buttonWidth / 2;
      const buttonCenterY = buttonRect.top + buttonHeight / 2;

      // Calculate mouse position
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Offset from the top-left corner in percentage
      const offsetXFromLeft = ((mouseX - buttonRect.left) / buttonWidth) * 100;
      const offsetYFromTop = ((mouseY - buttonRect.top) / buttonHeight) * 100;

      // Offset from the center in percentage
      let offsetXFromCenter = ((mouseX - buttonCenterX) / (buttonWidth / 2)) * 50;

      // Convert to absolute values
      offsetXFromCenter = Math.abs(offsetXFromCenter);

      // Update position and size of circle
      const circleSize = 115 + offsetXFromCenter * 2;
      circle.style.left = `${offsetXFromLeft.toFixed(1)}%`;
      circle.style.top = `${offsetYFromTop.toFixed(1)}%`;
      circle.style.width = `${circleSize}%`;
    };

    const handleMouseEnter = (event: MouseEvent) => {
      updateCirclePosition(event, button, circle);
    };

    const handleMouseMove = (event: MouseEvent) => {
      updateCirclePosition(event, button, circle);
    };

    const handleMouseLeave = () => {
      // Reset circle position when mouse leaves
      const buttonRect = button.getBoundingClientRect();
      const buttonCenterX = ((buttonRect.left + buttonRect.width / 2 - buttonRect.left) / buttonRect.width) * 100;
      const buttonCenterY = ((buttonRect.top + buttonRect.height / 2 - buttonRect.top) / buttonRect.height) * 100;
      circle.style.left = `${buttonCenterX}%`;
      circle.style.top = `${buttonCenterY}%`;
      circle.style.width = '0%';
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { buttonRef, circleRef };
}

