'use client';

import { TypeScript } from '@/components/icons/social-media/typescript';
import { Nextjs } from '@/components/icons/social-media/NextJs';
import { TailwindCSS } from '@/components/icons/social-media/Tailwind';
import { Jest } from '@/components/icons/social-media/Jest';
import { ReactQuery } from '@/components/icons/social-media/react-query';

type TechConfig = {
  icon: 'ts' | 'next' | 'tailwind' | 'jest' | 'reactQuery' | 'generic';
  borderClass?: string;
  iconClass?: string;
};

const BADGE_CONFIG: Record<string, TechConfig> = {
  TypeScript: {
    icon: 'ts',
    borderClass: 'border-[#3B82F6]',
  },
  'Next.js': {
    icon: 'next',
    borderClass: 'border-white/60',
  },
  Tailwind: {
    icon: 'tailwind',
    borderClass: 'border-[#06B6D4]',
    iconClass: 'text-[#06B6D4]',
  },
  Jest: {
    icon: 'jest',
    borderClass: 'border-[#9B2C2C]',
  },
  'React Query': {
    icon: 'reactQuery',
    borderClass: 'border-[#FACC15]',
  },
  TanStack: {
    icon: 'reactQuery',
    borderClass: 'border-[#FACC15]',
  },
};

export function TechBadge({ tech }: { tech: string }) {
  const config: TechConfig = BADGE_CONFIG[tech] ?? {
    icon: 'generic',
    borderClass: 'border-white/30',
  };
  const borderClass = config.borderClass ?? 'border-white/30';
  const baseIconClass = 'h-4 w-4 shrink-0';

  const icon =
    config.icon === 'ts' ? (
      <TypeScript className={baseIconClass} />
    ) : config.icon === 'next' ? (
      <Nextjs className={baseIconClass} />
    ) : config.icon === 'tailwind' ? (
      <TailwindCSS className={`${baseIconClass} ${config.iconClass ?? ''}`} />
    ) : config.icon === 'jest' ? (
      <Jest className={baseIconClass} />
    ) : config.icon === 'reactQuery' ? (
      <ReactQuery className={baseIconClass} />
    ) : null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white border ${borderClass} bg-[#0F0F0F]`}
    >
      {icon}
      {tech}
    </span>
  );
}
