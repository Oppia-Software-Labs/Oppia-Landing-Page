import { ArrowUpToLine } from 'lucide-react';
import type { IconProps } from '@/types/icons';
import { cn } from '@/utils/cn';

export function ShareIcon({ 
  className = '', 
  width = 18,
  height = 18,
}: IconProps) {
  return (
    <ArrowUpToLine
      width={width}
      height={height}
      className={cn('stroke-current', className)}
      aria-hidden="true"
    />
  );
}
