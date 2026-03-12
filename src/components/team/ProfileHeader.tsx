import Image from 'next/image';
import { motion } from 'framer-motion';
import type { TeamMember } from '@/types/team';

const CARD_BG = '#0F0F0F';

type TranslateFn = (key: string) => string;

interface SocialLinkConfig {
  key: string;
  href?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.ComponentType<any>;
  labelKey: string;
}

interface ProfileHeaderProps {
  member: TeamMember;
  displayRole: string;
  description: string;
  focusTag?: string;
  socialLinks: SocialLinkConfig[];
  t: TranslateFn;
}

export function ProfileHeader({
  member,
  displayRole,
  description,
  focusTag,
  socialLinks,
  t,
}: ProfileHeaderProps) {
  return (
    <motion.article
      className="rounded-2xl border border-white/10 p-6 sm:p-8"
      style={{ backgroundColor: CARD_BG }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="grid gap-6 sm:grid-cols-[minmax(0,280px)_1fr]">
        <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-xl bg-white/5">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top"
            sizes="280px"
          />
        </div>
        <div className="flex min-w-0 flex-col">
          {focusTag && (
            <span className="mb-3 inline-flex items-center gap-1.5 text-xs sm:text-sm text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {focusTag}
            </span>
          )}
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Hey, I&apos;m {member.name}
          </h1>
          <p className="mt-2 text-base text-white/80 sm:text-lg">
            {displayRole}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map(({ key, href, Icon, labelKey }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
              >
                <Icon className="h-4 w-4 text-white" />
                {t(labelKey)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

