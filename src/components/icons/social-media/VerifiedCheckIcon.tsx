import { BadgeCheck } from 'lucide-react';
import type { IconProps } from '@/types/icons';
import { cn } from '@/utils/cn';

export function VerifiedCheckIcon({ 
  className = '', 
  width = 20,
  height = 20,
}: IconProps) {
  return (
    <BadgeCheck
      width={width}
      height={height}
      className={cn('fill-[#1DA1F2] text-white', className)}
      aria-hidden="true"
    />
  );
}
