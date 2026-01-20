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
      className="group flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm transition-all hover:bg-white/20"
    >
      <span className="text-sm font-medium text-white">{label}</span>
      <ArrowUpRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}

