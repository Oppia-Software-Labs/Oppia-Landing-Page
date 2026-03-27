'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
import type { WorkExperienceItem } from '@/types/team';
import { TechBadge } from '@/components/team/TechBadge';

const CARD_BG = '#0F0F0F';

/** Show carousel when experience count is greater than this (e.g. 2 → carousel from 3 items up) */
const CAROUSEL_THRESHOLD = 2;

const SLIDE_TRANSITION = { duration: 0.35, ease: 'easeInOut' as const };

type TranslateFn = (key: string) => string;

interface WorkExperienceSectionProps {
  workExperience?: WorkExperienceItem[];
  t: TranslateFn;
  /** Reset slide when switching team member profiles */
  profileKey?: string;
}

function ExperienceCard({ exp, t }: { exp: WorkExperienceItem; t: TranslateFn }) {
  return (
    <div
      className="rounded-2xl border border-white/15 px-8 py-8 shadow-[0_4px_6px_rgba(0,0,0,0.3)] sm:px-10 sm:py-10"
      style={{ backgroundColor: CARD_BG }}
    >
      <h3 className="text-base font-bold text-white sm:text-lg">
        {exp.role} at{' '}
        {exp.companyUrl ? (
          <a
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 underline decoration-emerald-400/50 underline-offset-2 transition-colors hover:text-emerald-200 hover:decoration-emerald-300"
          >
            {exp.company}
          </a>
        ) : (
          exp.company
        )}
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
        <p className="text-sm font-semibold text-white">{t('team.profile.objective')}</p>
        <p className="mt-1 text-sm text-white/70">{exp.objective}</p>
      </div>
      <div className="my-6 h-px w-full bg-white/10" />
      <div>
        <p className="text-sm font-semibold text-white">{t('team.profile.keyAchievements')}</p>
        <div className="mt-2 space-y-2 text-sm text-white/70">
          {exp.keyAchievements.map((achievement, i) => (
            <p key={i} className="leading-snug">
              {achievement}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkExperienceSection({ workExperience, t, profileKey }: WorkExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [profileKey, workExperience?.length]);

  if (!workExperience || workExperience.length === 0) {
    return null;
  }

  const useCarousel = workExperience.length > CAROUSEL_THRESHOLD;
  const safeIndex =
    workExperience.length > 0 ? activeIndex % workExperience.length : 0;

  const goPrev = () => {
    setActiveIndex((i) => (i <= 0 ? workExperience.length - 1 : i - 1));
  };

  const goNext = () => {
    setActiveIndex((i) => (i >= workExperience.length - 1 ? 0 : i + 1));
  };

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

      {useCarousel ? (
        <>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${profileKey ?? 'profile'}-${safeIndex}-${workExperience[safeIndex]?.company}-${workExperience[safeIndex]?.project}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={SLIDE_TRANSITION}
              >
                <ExperienceCard exp={workExperience[safeIndex]} t={t} />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
                aria-label={t('team.profile.previousExperience')}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
                aria-label={t('team.profile.nextExperience')}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <p className="text-sm text-white/50">
              {safeIndex + 1} / {workExperience.length}
            </p>
          </div>
        </>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {workExperience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.project}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 + index * 0.05 }}
            >
              <ExperienceCard exp={exp} t={t} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
