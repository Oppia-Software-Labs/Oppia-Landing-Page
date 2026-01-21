import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Section title text or React node */
  title: string | ReactNode;
  /** Optional subtitle text or React node */
  subtitle?: string | ReactNode;
  /** Additional CSS classes for the header container */
  className?: string;
  /** Additional CSS classes for the title */
  titleClassName?: string;
  /** Additional CSS classes for the subtitle */
  subtitleClassName?: string;
  /** Optional badge element to display above the title */
  badge?: ReactNode;
}



export function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  badge,
}: SectionHeaderProps) {
  return (
    <header className={cn('mb-8 text-center sm:mb-12', className)}>
      {badge && <div className="mb-4">{badge}</div>}
      <h2
        className={cn(
          'mb-3 text-2xl font-normal text-white sm:text-3xl md:text-4xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mb-4 text-sm font-normal leading-relaxed text-gray-300 sm:text-base md:text-lg md:mx-auto md:max-w-xl',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}

