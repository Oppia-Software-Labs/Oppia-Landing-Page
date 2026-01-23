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
  const baseClasses = 'mb-5 w-fit rounded-full px-8 py-2.5 text-sm font-medium transition-all duration-400';
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

