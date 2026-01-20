import Image from 'next/image';
import type { IconProps } from '@/types/icons';

export function OppiaIsotypeIcon({ 
  className = '', 
  width = 24,
  height = 24,
}: IconProps) {
  return (
    <Image
      src="/oppia-logos/isotypes/isotype-full-color.svg"
      alt="Oppia"
      width={width}
      height={height}
      className={className}
      priority={false}
    />
  );
}
