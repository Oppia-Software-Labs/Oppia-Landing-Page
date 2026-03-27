import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GitHub } from '@/components/icons/social-media/Github';
import type { ProjectItem } from '@/types/team';
import { TechBadge } from '@/components/team/TechBadge';

const CARD_BG = '#0F0F0F';
const PROJECT_TRANSITION = { duration: 0.4, ease: 'easeInOut' as const };
const WAVE_TOP_RIGHT = '/portfolio/waves/project-top-right.svg';
const WAVE_DOWN_LEFT = '/portfolio/waves/project-down-left.svg';

type TranslateFn = (key: string) => string;

interface ProjectsSectionProps {
  /** Remount / reset tab when navigating between team profiles */
  profileKey?: string;
  projects?: ProjectItem[];
  hackathonAwards?: ProjectItem[];
  t: TranslateFn;
}

export function ProjectsSection({ profileKey, projects, hackathonAwards, t }: ProjectsSectionProps) {
  const hasProjects = (projects?.length ?? 0) > 0;
  const hasHackathons = (hackathonAwards?.length ?? 0) > 0;

  const [projectsTab, setProjectsTab] = useState<'projects' | 'hackathonAwards'>(() =>
    hasProjects ? 'projects' : 'hackathonAwards'
  );
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    setProjectIndex(0);
    setProjectsTab(hasProjects ? 'projects' : 'hackathonAwards');
  }, [profileKey, hasProjects, hasHackathons]);

  const hasProjectsSection = hasProjects || hasHackathons;

  const projectsList = useMemo(
    () => (projectsTab === 'projects' ? projects ?? [] : hackathonAwards ?? []),
    [projects, hackathonAwards, projectsTab]
  );

  const showTabToggle = hasProjects && hasHackathons;
  const sectionHeading =
    hasProjects && !hasHackathons
      ? t('team.profile.projects')
      : !hasProjects && hasHackathons
        ? t('team.profile.hackathonAwards')
        : t('team.profile.projects');

  const currentProject =
    projectsList.length > 0 ? projectsList[projectIndex % projectsList.length] : null;

  const goPrev = () => {
    setProjectIndex((i) => (i <= 0 ? projectsList.length - 1 : i - 1));
  };

  const goNext = () => {
    setProjectIndex((i) => (i >= projectsList.length - 1 ? 0 : i + 1));
  };

  if (!hasProjectsSection) {
    return null;
  }

  return (
    <motion.section
      className="mt-12"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-white sm:text-2xl">
          <span className="text-white/70">&lt;/&gt;</span> {sectionHeading}
        </h2>
        {showTabToggle ? (
          <div className="flex rounded-full border border-white/15 bg-white/5 p-1.5">
            <button
              type="button"
              onClick={() => {
                setProjectsTab('projects');
                setProjectIndex(0);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:text-base ${
                projectsTab === 'projects'
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t('team.profile.projects')}
            </button>
            <button
              type="button"
              onClick={() => {
                setProjectsTab('hackathonAwards');
                setProjectIndex(0);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:text-base ${
                projectsTab === 'hackathonAwards'
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {t('team.profile.hackathonAwards')}
            </button>
          </div>
        ) : null}
      </div>

      <div
        className="overflow-hidden rounded-2xl border border-white/15 shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
        style={{ backgroundColor: CARD_BG }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${projectsTab}-${projectIndex}-${currentProject?.title ?? 'empty'}`}
            className="grid h-[540px] sm:h-[580px] sm:grid-cols-2 sm:divide-x sm:divide-white/15"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={PROJECT_TRANSITION}
          >
            <div className="flex min-h-0 flex-col items-start overflow-hidden p-10 pt-20 text-left sm:p-12 sm:pt-24 md:p-16 md:pt-28">
              {currentProject ? (
                <>
                  <h3 className="shrink-0 text-xl font-bold text-white sm:text-2xl">
                    {currentProject.title}
                  </h3>
                  {currentProject.role && (
                    <p className="mt-1 shrink-0 text-xs text-white/60 sm:text-sm">
                      {currentProject.role}
                    </p>
                  )}
                  {currentProject.issuer && (
                    <p className="mt-2 shrink-0 text-xs text-white/60 sm:text-sm">
                      {currentProject.issuer}
                    </p>
                  )}
                  {currentProject.techStack.length > 0 && (
                    <div className="mt-3 shrink-0 flex flex-wrap justify-start gap-2">
                      {currentProject.techStack.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                  )}
                  <p className="mt-2 min-h-0 max-h-[14rem] overflow-hidden pb-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    {currentProject.description}
                  </p>
                  <div className="mt-2 shrink-0 flex flex-wrap justify-start gap-3">
                    {currentProject.codeUrl && (
                      <a
                        href={currentProject.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white bg-white px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-white/90"
                      >
                        <GitHub className="h-4 w-4 text-black" />
                        {t('team.profile.code')}
                      </a>
                    )}
                    {currentProject.projectUrl && (
                      <a
                        href={currentProject.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition-colors hover:bg-white/10"
                      >
                        <ChevronRight className="h-4 w-4" />
                        {t('team.profile.seeProject')}
                      </a>
                    )}
                  </div>
                  <div className="min-h-0 flex-1" aria-hidden />
                </>
              ) : (
                <p className="text-base text-white/60">
                  {projectsTab === 'projects' ? 'No projects yet.' : 'No hackathon awards yet.'}
                </p>
              )}
            </div>
            <div className="relative hidden h-full min-h-0 overflow-hidden sm:block">
              <img
                src={WAVE_TOP_RIGHT}
                alt=""
                className="absolute right-0 top-0 z-0 h-auto w-full max-w-[200px] object-contain object-top-right md:max-w-[240px]"
              />
              <img
                src={WAVE_DOWN_LEFT}
                alt=""
                className="absolute bottom-0 left-0 z-0 h-auto w-full max-w-[360px] object-contain object-bottom-left md:max-w-[420px]"
              />
              {currentProject?.image && (
                <div className="absolute inset-0 z-10 flex items-center justify-center p-1 sm:p-2">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    width={320}
                    height={200}
                    className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain shadow-lg"
                    sizes="(max-width: 640px) 95vw, 50vw"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {projectsList.length > 1 && (
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </motion.section>
  );
}

