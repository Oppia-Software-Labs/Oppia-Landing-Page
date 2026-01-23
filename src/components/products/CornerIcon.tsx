/**
 * CornerIcon component
 * Displays an icon in the corner of a product card
 */

import Image from 'next/image';
import { CornerIconConfig } from '@/constants/products';

interface CornerIconProps {
  config: CornerIconConfig;
  alt: string;
}

export function CornerIcon({ config, alt }: CornerIconProps) {
  return (
    <div className={`absolute ${config.position} z-20 pointer-events-none`}>
      <Image
        src={config.src}
        alt={alt}
        width={config.width}
        height={config.height}
        className={config.className}
        aria-hidden="true"
      />
    </div>
  );
}

