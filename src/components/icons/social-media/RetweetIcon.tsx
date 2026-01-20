import { Repeat2 } from 'lucide-react';
import type { IconProps } from '@/types/icons';
import { cn } from '@/utils/cn';

export function RetweetIcon({ 
  className = '', 
  width = 18,
  height = 18,
}: IconProps) {
  return (
    <Repeat2
      width={width}
      height={height}
      className={cn('stroke-current', className)}
      aria-hidden="true"
    />
  );
}
