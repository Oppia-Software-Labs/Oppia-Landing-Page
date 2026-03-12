'use client';

import { useState, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { LinkedIn } from '@/components/icons/social-media/Linkedin';
import { GitHub } from '@/components/icons/social-media/Github';
import { XformerlyTwitter } from '@/components/icons/social-media/X';
import { TelegramIcon } from '@/components/icons/social-media/TelegramIcon';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { getMemberBySlug } from '@/utils/getTeamMembers';
import { TechBadge } from '@/components/team/TechBadge';
import { CONTAINER_PADDING } from '@/constants/layout';

const CARD_BG = '#0F0F0F';
const projectTransition = { duration: 0.4, ease: 'easeInOut' as const };
const WAVE_TOP_RIGHT = '/portfolio/waves/project-top-right.svg';
const WAVE_DOWN_LEFT = '/portfolio/waves/project-down-left.svg';

export default function TeamMemberPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  const member = slug ? getMemberBySlug(slug) : undefined;

  const [projectsTab, setProjectsTab] = useState<'projects' | 'hackathonAwards'>('projects');
  const [projectIndex, setProjectIndex] = useState(0);

  const projectsList = useMemo(
    () => (projectsTab === 'projects' ? member?.projects ?? [] : member?.hackathonAwards ?? []),
    [member, projectsTab]
  );
  const currentProject = projectsList.length > 0 ? projectsList[projectIndex % projectsList.length] : null;

  const goPrev = () => setProjectIndex((i) => (i <= 0 ? projectsList.length - 1 : i - 1));
  const goNext = () => setProjectIndex((i) => (i >= projectsList.length - 1 ? 0 : i + 1));

  const hasProjectsSection = (member?.projects?.length ?? 0) > 0 || (member?.hackathonAwards?.length ?? 0) > 0;

  if (!member) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
        <p className="text-white/80">{t('team.profile.notFound')}</p>
        <Link
          href="/#team"
          className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
        >
          {t('team.profile.backToTeam')}
        </Link>
      </div>
    );
  }

  const displayRole = member.profileRole ?? member.role;
  const socialLinks = [
    { key: 'linkedin', href: member.socialLinks.linkedin, Icon: LinkedIn, labelKey: 'team.profile.linkedin' },
    { key: 'github', href: member.socialLinks.github, Icon: GitHub, labelKey: 'team.profile.github' },
    { key: 'twitter', href: member.socialLinks.twitter, Icon: XformerlyTwitter, labelKey: 'team.profile.twitter' },
    { key: 'telegram', href: member.socialLinks.telegram, Icon: TelegramIcon, labelKey: 'team.profile.telegram' },
  ].filter((s) => s.href);

  return (
    <div className={`${CONTAINER_PADDING.HORIZONTAL} pb-20 pt-20 sm:pt-28 md:pt-32`}>
      <div className="mx-auto max-w-5xl">
        {/* Back to previous page */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-6 inline-flex items-center gap-2.5 text-base text-white/70 transition-colors hover:text-white"
          aria-label={t('team.profile.goBack')}
        >
          <ChevronLeft className="h-6 w-6" />
          {t('team.profile.goBack')}
        </button>

        {/* Profile card - reusable shell, content from member */}
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
              {member.focusTag && (
                <span className="mb-3 inline-flex items-center gap-1.5 text-xs sm:text-sm text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {member.focusTag}
                </span>
              )}
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Hey, I&apos;m {member.name}
              </h1>
              <p className="mt-2 text-base text-white/80 sm:text-lg">
                {displayRole}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                {member.description}
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

        {/* Work Experience - reusable card UI, data from member.workExperience */}
        {member.workExperience && member.workExperience.length > 0 && (
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
              {member.workExperience.map((exp, index) => (
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
        )}
        {/* Projects - single card with tabs and arrows (between Work Experience and Education) */}
        {hasProjectsSection && (
          <motion.section
            className="mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
          >
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-white sm:text-2xl">
                <span className="text-white/70">&lt;/&gt;</span> {t('team.profile.projects')}
              </h2>
              <div className="flex rounded-full border border-white/15 bg-white/5 p-1.5">
                <button
                  type="button"
                  onClick={() => { setProjectsTab('projects'); setProjectIndex(0); }}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:text-base ${projectsTab === 'projects' ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'}`}
                >
                  {t('team.profile.projects')}
                </button>
                <button
                  type="button"
                  onClick={() => { setProjectsTab('hackathonAwards'); setProjectIndex(0); }}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:text-base ${projectsTab === 'hackathonAwards' ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'}`}
                >
                  {t('team.profile.hackathonAwards')}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 shadow-[0_4px_6px_rgba(0,0,0,0.3)] overflow-hidden" style={{ backgroundColor: CARD_BG }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${projectsTab}-${projectIndex}-${currentProject?.title ?? 'empty'}`}
                  className="grid h-[540px] sm:h-[580px] sm:grid-cols-2 sm:divide-x sm:divide-white/15"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={projectTransition}
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
                    <p className="text-base text-white/60">{projectsTab === 'projects' ? 'No projects yet.' : 'No hackathon awards yet.'}</p>
                  )}
                </div>
                <div className="relative h-full min-h-0 overflow-hidden">
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
        )}

        {/* Education - reusable card UI, data from member.education */}
        {member.education && member.education.length > 0 && (
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
              {member.education.map((edu, index) => (
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
        )}

      </div>
    </div>
  );
}
