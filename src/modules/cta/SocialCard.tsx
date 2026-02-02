import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface SocialCardProps {
  href: string;
  label: string;
}

export function SocialCard({ href, label }: SocialCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-sm transition-all hover:bg-white/20"
    >
      <span className="text-xs sm:text-sm font-medium text-white">{label}</span>
      <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
    </Link>
  );
}

