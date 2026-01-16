import Image from 'next/image';
import type { LogoProps } from '@/types/icons';

export function StellarLogo({
  width = 120,
  height = 40,
  className = '',
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/partners/stellar.svg"
      alt="Stellar"
      width={width}
      height={height}
      className={className || 'h-auto w-auto'}
      priority={priority}
      {...(priority ? {} : { loading: 'lazy' })}
    />
  );
}

