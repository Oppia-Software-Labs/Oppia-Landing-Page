'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { useDirectionalButtonHover } from '@/hooks/useDirectionalButtonHover';

interface DirectionalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'light' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const sizeStyles = {
  sm: 'h-9 px-4 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
};

export function DirectionalButton({
  variant = 'dark',
  size = 'md',
  asLink = false,
  href,
  className,
  children,
  ...props
}: DirectionalButtonProps) {
  const { buttonRef, circleRef } = useDirectionalButtonHover();

  const baseStyles = cn(
    'btn-directional',
    `btn-directional--${variant}`,
    sizeStyles[size],
    className
  );

  const content = (
    <>
      <div className="btn-directional__bg"></div>
      <div className="btn-directional__circle-wrap">
        <div ref={circleRef} className="btn-directional__circle">
          <div className="btn-directional__circle-inner"></div>
        </div>
      </div>
      <div className="btn-directional__text">
        <p className="btn-directional__text-p">{children}</p>
      </div>
    </>
  );

  if (asLink && href) {
    return (
      <Link
        ref={buttonRef as React.LegacyRef<HTMLAnchorElement>}
        href={href}
        className={baseStyles}
        data-theme={variant}
        data-btn-hover=""
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.LegacyRef<HTMLButtonElement>}
      className={baseStyles}
      data-theme={variant}
      data-btn-hover=""
      {...props}
    >
      {content}
    </button>
  );
}

