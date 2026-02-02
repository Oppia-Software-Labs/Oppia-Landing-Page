/**
 * ProductButton component
 * Displays the product card CTA button
 */

interface ProductButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'white' | 'gray';
}

export function ProductButton({ text, onClick, variant = 'gray' }: ProductButtonProps) {
  const baseClasses = 'mb-4 w-fit rounded-full px-6 py-2 text-xs font-medium transition-all duration-400 max-md:mb-2.5 max-md:px-4 max-md:py-1.5 max-md:text-[11px] max-[414px]:mb-2 max-[414px]:px-3 max-[414px]:py-1 max-[414px]:text-[10px]';
  const variantClasses =
    variant === 'white'
      ? 'bg-white text-black hover:bg-white shadow-none'
      : 'bg-gray-300 text-black hover:bg-gray-400';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.625, 0.05, 0, 1)',
        boxShadow: variant === 'white' ? 'none' : undefined,
      }}
    >
      {text}
    </button>
  );
}

