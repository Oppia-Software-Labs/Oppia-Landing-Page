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
    <header className={cn('mb-6 text-center sm:mb-10', className)}>
      {badge && <div className="mb-3">{badge}</div>}
      <h2
        className={cn(
          'mb-2.5 text-xl font-normal text-white sm:text-2xl md:text-3xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mb-3 text-xs font-normal leading-relaxed text-gray-300 sm:text-sm md:text-base md:mx-auto md:max-w-xl',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}

