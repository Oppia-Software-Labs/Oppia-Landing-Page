/**
 * ProductLogo component
 * Displays the product logo in active or inactive state
 */

import Image from 'next/image';
import { ProductLogoConfig, ProductSlug, LOGO_POSITIONS } from '@/constants/products';

interface ProductLogoProps {
  config: ProductLogoConfig;
  slug: ProductSlug;
  isActive: boolean;
}

export function ProductLogo({ config, slug, isActive }: ProductLogoProps) {
  const logoConfig = isActive ? config.active : config.inactive;
  const position = isActive ? LOGO_POSITIONS.ACTIVE[slug] : LOGO_POSITIONS.INACTIVE[slug];

  return (
    <div className={`absolute ${position} z-20`}>
      <Image
        src={logoConfig.src}
        alt={isActive ? `${slug} logo` : `${slug} Logo`}
        width={logoConfig.width}
        height={logoConfig.height}
        className={logoConfig.className}
        priority
      />
    </div>
  );
}

