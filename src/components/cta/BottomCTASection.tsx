/**
 * BottomCTASection component
 * Reusable bottom CTA section with description text and action buttons
 */

'use client';

import { useRouter } from 'next/navigation';

interface ButtonConfig {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

interface BottomCTASectionProps {
  description: string;
  ctaText: string;
  buttons: ButtonConfig[];
  className?: string;
}

export function BottomCTASection({
  description,
  ctaText,
  buttons,
  className = '',
}: BottomCTASectionProps) {
  const router = useRouter();

  const handleButtonClick = (button: ButtonConfig) => {
    if (button.onClick) {
      button.onClick();
    } else if (button.href) {
      if (button.href.startsWith('#')) {
        const element = document.querySelector(button.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else if (button.href.startsWith('http://') || button.href.startsWith('https://')) {
        window.open(button.href, '_blank', 'noopener,noreferrer');
      } else {
        router.push(button.href);
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Divider Line */}
      <div className="w-full border-t border-white/20 mb-4 sm:mb-6"></div>

      {/* Content Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 items-start lg:items-center">
        {/* Left: Description */}
        <div className="max-w-md w-full">
          <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed">{description}</p>
        </div>

        {/* Right: CTA Text and Buttons */}
        <div className="flex flex-col gap-2 sm:gap-3 items-start lg:items-end w-full lg:w-auto">
          <p className="text-white text-xs sm:text-sm lg:text-base font-medium">{ctaText}</p>
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(button)}
                className={`px-4 py-2 text-sm rounded-full font-medium hover:opacity-90 transition-all ${
                  button.variant === 'secondary'
                    ? 'bg-transparent border-2 border-white text-white'
                    : 'bg-white/90 text-[#001D66] hover:bg-white'
                }`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

