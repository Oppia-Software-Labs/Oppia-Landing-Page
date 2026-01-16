import Image from 'next/image';
import type { LogoProps } from '@/types/icons';

export function CatalitecLogo({
  width = 120,
  height = 40,
  className = '',
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/partners/catalitec.svg"
      alt="Catalitec"
      width={width}
      height={height}
      className={className || 'h-auto w-auto'}
      priority={priority}
      {...(priority ? {} : { loading: 'lazy' })}
    />
  );
}

