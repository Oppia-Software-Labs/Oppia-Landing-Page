import { useState, useEffect } from 'react';
import { ANIMATION_DURATIONS } from '@/constants/animations';

export function useMenuAnimation(isMenuOpen: boolean) {
  const [isClosing, setIsClosing] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsClosing(false);
      setShowBackdrop(true);
      setShowMenuContent(true);
    } else {
      if (showMenuContent || showBackdrop) {
        setIsClosing(true);
        setShowBackdrop(false);
        const timer = setTimeout(() => {
          setShowMenuContent(false);
          setIsClosing(false);
        }, ANIMATION_DURATIONS.menuClose);
        return () => clearTimeout(timer);
      }
    }
  }, [isMenuOpen, showMenuContent, showBackdrop]);

  return {
    isClosing,
    showMenuContent,
    showBackdrop,
  };
}

