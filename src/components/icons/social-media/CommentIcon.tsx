import { MessageCircle } from 'lucide-react';
import type { IconProps } from '@/types/icons';
import { cn } from '@/utils/cn';

export function CommentIcon({ 
  className = '', 
  width = 18,
  height = 18,
}: IconProps) {
  return (
    <MessageCircle
      width={width}
      height={height}
      className={cn('stroke-current', className)}
      aria-hidden="true"
    />
  );
}
