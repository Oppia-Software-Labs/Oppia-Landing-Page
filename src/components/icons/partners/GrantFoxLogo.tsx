import Image from 'next/image';
import type { LogoProps } from '@/types/icons';

export function GrantFoxLogo({
  width = 120,
  height = 40,
  className = '',
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/partners/grantfox.svg"
      alt="GrantFox"
      width={width}
      height={height}
      className={className || 'h-auto w-auto'}
      priority={priority}
      {...(priority ? {} : { loading: 'lazy' })}
    />
  );
}

