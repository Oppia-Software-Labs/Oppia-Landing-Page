import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';
import type { WorkExperienceItem } from '@/types/team';
import { TechBadge } from '@/components/team/TechBadge';

const CARD_BG = '#0F0F0F';

type TranslateFn = (key: string) => string;

interface WorkExperienceSectionProps {
  workExperience?: WorkExperienceItem[];
  t: TranslateFn;
}

export function WorkExperienceSection({ workExperience, t }: WorkExperienceSectionProps) {
  if (!workExperience || workExperience.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="mt-12"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
    >
      <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
        <Monitor className="h-5 w-5 text-white/80" />
        {t('team.profile.workExperience')}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {workExperience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.project}-${index}`}
            className="rounded-2xl border border-white/15 px-8 py-8 sm:px-10 sm:py-10 shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
            style={{ backgroundColor: CARD_BG }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
          >
            <h3 className="text-base font-bold text-white sm:text-lg">
              {exp.role} at {exp.company}
            </h3>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              {t('team.profile.project')} {exp.project} | {exp.dates}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.techStack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white">
                {t('team.profile.objective')}
              </p>
              <p className="mt-1 text-sm text-white/70">
                {exp.objective}
              </p>
            </div>
            <div className="my-6 h-px w-full bg-white/10" />
            <div>
              <p className="text-sm font-semibold text-white">
                {t('team.profile.keyAchievements')}
              </p>
              <div className="mt-2 space-y-2 text-sm text-white/70">
                {exp.keyAchievements.map((achievement, i) => (
                  <p key={i} className="leading-snug">
                    {achievement}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

