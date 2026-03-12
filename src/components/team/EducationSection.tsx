import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import type { EducationItem } from '@/types/team';

const CARD_BG = '#0F0F0F';

type TranslateFn = (key: string) => string;

interface EducationSectionProps {
  education?: EducationItem[];
  t: TranslateFn;
}

export function EducationSection({ education, t }: EducationSectionProps) {
  if (!education || education.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="mt-12"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
    >
      <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
        <GraduationCap className="h-5 w-5 text-white/80" />
        {t('team.profile.education')}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((edu, index) => (
          <motion.div
            key={`${edu.school}-${edu.degree}-${index}`}
            className="rounded-2xl border border-white/15 px-8 py-8 sm:px-10 sm:py-10 shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
            style={{ backgroundColor: CARD_BG }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
          >
            <h3 className="text-base font-semibold text-white sm:text-lg">
              {edu.degree}
            </h3>
            <p className="mt-1 text-xs text-white/60 sm:text-sm">
              {edu.school} | {edu.dates}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

