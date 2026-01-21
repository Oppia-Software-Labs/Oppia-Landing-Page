'use client';

import Image from 'next/image';
import { ProductCardBase } from './ProductCardBase';

interface Product {
  id: string;
  tags: string[];
  description: string;
  ctaText: string;
  imagePath: string;
}

interface ProductCardProps {
  product: Product;
  position: 'left' | 'center' | 'right';
  isActive: boolean;
  isTransitioning: boolean;
}

export function ProductCard({ product, position, isActive, isTransitioning: _isTransitioning }: ProductCardProps) {
  const positionClasses = {
    left: 'origin-left scale-90 rotate-[-8deg] opacity-40',
    center: 'scale-100 rotate-0 opacity-100',
    right: 'origin-right scale-90 rotate-[8deg] opacity-40',
  };

  const cardFilter = !isActive ? 'grayscale(100%) brightness(0.3)' : 'none';

  return (
    <div
      className={positionClasses[position]}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        filter: cardFilter,
      }}
    >
      <ProductCardBase className="h-[680px] w-[520px]">
        <div className="flex h-full flex-col items-center justify-between p-8 pt-16">
          <div className="flex w-full flex-col items-center">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {product.tags.map((tag, index) => {
                return (
                  <span
                    key={index}
                    className={`rounded-full px-5 py-2 text-sm font-medium text-white ${
                      isActive
                        ? 'bg-[#FFFFFF]'
                        : 'bg-gray-800/50 text-gray-400'
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: 'rgba(255, 255, 255, 0.12)' }
                        : undefined
                    }
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            <h3 className="mb-6 text-7xl font-bold text-white">
              {product.id === 'neko' ? 'Neko' : product.id === 'geko' ? 'Geko' : 'Coming Soon'}
            </h3>

            <p className="mb-8 max-w-md text-lg font-normal leading-relaxed text-white text-center">
              {product.description}
            </p>

            <button
              className={`mb-8 w-fit rounded-full px-8 py-3 text-base font-medium transition-all ${
                isActive
                  ? 'bg-gray-300 text-black hover:bg-gray-400'
                  : 'bg-gray-800/50 text-gray-400'
              }`}
            >
              {product.ctaText}
            </button>
          </div>
        </div>
      </ProductCardBase>
    </div>
  );
}
