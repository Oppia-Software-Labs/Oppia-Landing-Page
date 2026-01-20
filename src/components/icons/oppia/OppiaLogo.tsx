import Image from 'next/image';
import type { LogoProps } from '@/types/icons';

export function OppiaLogo({
  width = 120,
  height = 34,
  className = '',
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/oppia-logos/imagotypes/Oppia-Imagotype-white.svg"
      alt="Oppia"
      width={width}
      height={height}
      className={className || 'h-auto w-auto'}
      priority={priority}
      {...(priority ? {} : { loading: 'lazy' })}
    />
  );
}

