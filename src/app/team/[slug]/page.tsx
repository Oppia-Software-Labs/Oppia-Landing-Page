'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { LinkedIn } from '@/components/icons/social-media/Linkedin';
import { GitHub } from '@/components/icons/social-media/Github';
import { XformerlyTwitter } from '@/components/icons/social-media/X';
import { TelegramIcon } from '@/components/icons/social-media/TelegramIcon';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { getMemberBySlug } from '@/utils/getTeamMembers';
import { CONTAINER_PADDING } from '@/constants/layout';
import { ProfileHeader } from '@/components/team/ProfileHeader';
import { WorkExperienceSection } from '@/components/team/WorkExperienceSection';
import { ProjectsSection } from '@/components/team/ProjectsSection';
import { EducationSection } from '@/components/team/EducationSection';

export default function TeamMemberPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  const member = slug ? getMemberBySlug(slug) : undefined;

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
    <div className={`${CONTAINER_PADDING.HORIZONTAL} pb-20 pt-12 sm:pt-16 md:pt-20`}>
      <div className="mx-auto max-w-5xl">
        {/* Back to previous page */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-4 inline-flex items-center gap-2.5 text-base text-white/70 transition-colors hover:text-white"
          aria-label={t('team.profile.goBack')}
        >
          <ChevronLeft className="h-6 w-6" />
          {t('team.profile.goBack')}
        </button>

        <ProfileHeader
          member={member}
          displayRole={displayRole}
          socialLinks={socialLinks}
          t={t}
        />

        <WorkExperienceSection workExperience={member.workExperience} t={t} />

        <ProjectsSection
          projects={member.projects}
          hackathonAwards={member.hackathonAwards}
          t={t}
        />

        <EducationSection education={member.education} t={t} />

      </div>
    </div>
  );
}
