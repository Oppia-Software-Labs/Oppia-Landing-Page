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
import type { WorkExperienceItem, EducationItem, ProjectItem } from '@/types/team';

type TranslateFn = (key: string) => string;

const MEMBER_PROFILE_I18N_PREFIX: Record<string, string> = {
  'kevin-latino': 'kevinLatino',
  'santiago-villarreal': 'santiagoVillarreal',
  'matias-aguilar': 'matiasAguilar',
  'fabian-sanchez': 'fabianSanchez',
};

function localizedWorkExperience(
  slug: string,
  workExperience: WorkExperienceItem[] | undefined,
  t: TranslateFn
): WorkExperienceItem[] | undefined {
  if (!workExperience) return undefined;
  if (slug === 'kevin-latino') {
    return workExperience.map((exp) => {
      if (exp.project === 'Heart Beam') {
        return {
          ...exp,
          objective: t('team.members.kevinLatino.workExperience.heartBeam.objective'),
          keyAchievements: t('team.members.kevinLatino.workExperience.heartBeam.keyAchievements') as unknown as string[],
        };
      }
      if (exp.project === 'Sagicor') {
        return {
          ...exp,
          objective: t('team.members.kevinLatino.workExperience.sagicor.objective'),
          keyAchievements: t('team.members.kevinLatino.workExperience.sagicor.keyAchievements') as unknown as string[],
        };
      }
      return exp;
    });
  }
  if (slug === 'santiago-villarreal') {
    return workExperience.map((exp) => {
      if (exp.project === 'KYC, analytics & Stellar payouts') {
        return {
          ...exp,
          objective: t('team.members.santiagoVillarreal.workExperience.grantFox.objective'),
          keyAchievements: t('team.members.santiagoVillarreal.workExperience.grantFox.keyAchievements') as unknown as string[],
        };
      }
      if (exp.project === 'Studio & open-source financial infrastructure') {
        return {
          ...exp,
          objective: t('team.members.santiagoVillarreal.workExperience.oppiaLabs.objective'),
          keyAchievements: t('team.members.santiagoVillarreal.workExperience.oppiaLabs.keyAchievements') as unknown as string[],
        };
      }
      if (exp.project === 'Emerson.com & digital CX') {
        return {
          ...exp,
          objective: t('team.members.santiagoVillarreal.workExperience.emerson.objective'),
          keyAchievements: t('team.members.santiagoVillarreal.workExperience.emerson.keyAchievements') as unknown as string[],
        };
      }
      return exp;
    });
  }
  if (slug === 'matias-aguilar') {
    return workExperience.map((exp) => {
      if (exp.project === 'Verifiable credentials infrastructure on Stellar') {
        return {
          ...exp,
          objective: t('team.members.matiasAguilar.workExperience.acta.objective'),
          keyAchievements: t('team.members.matiasAguilar.workExperience.acta.keyAchievements') as unknown as string[],
        };
      }
      if (exp.project === 'Studio & open-source financial infrastructure') {
        return {
          ...exp,
          objective: t('team.members.matiasAguilar.workExperience.oppiaLabs.objective'),
          keyAchievements: t('team.members.matiasAguilar.workExperience.oppiaLabs.keyAchievements') as unknown as string[],
        };
      }
      if (exp.project === 'Multiple projects across LATAM') {
        return {
          ...exp,
          objective: t('team.members.matiasAguilar.workExperience.web3Builder.objective'),
          keyAchievements: t('team.members.matiasAguilar.workExperience.web3Builder.keyAchievements') as unknown as string[],
        };
      }
      return exp;
    });
  }
  if (slug === 'fabian-sanchez') {
    return workExperience.map((exp) => {
      if (exp.project === 'Quality assurance & full-stack developer') {
        return {
          ...exp,
          objective: t('team.members.fabianSanchez.workExperience.grantFox.objective'),
          keyAchievements: t('team.members.fabianSanchez.workExperience.grantFox.keyAchievements') as unknown as string[],
        };
      }
      if (exp.project === 'Web3 studio & open-source financial infrastructure') {
        return {
          ...exp,
          objective: t('team.members.fabianSanchez.workExperience.oppiaLabs.objective'),
          keyAchievements: t('team.members.fabianSanchez.workExperience.oppiaLabs.keyAchievements') as unknown as string[],
        };
      }
      return exp;
    });
  }
  return workExperience;
}

function localizedProjects(
  slug: string,
  projects: ProjectItem[] | undefined,
  t: TranslateFn
): ProjectItem[] | undefined {
  if (!projects) return undefined;
  if (slug === 'kevin-latino') {
    return projects.map((project) => {
      if (project.title === 'Neko Protocol') {
        return {
          ...project,
          role: t('team.members.kevinLatino.projects.neko.role'),
          description: t('team.members.kevinLatino.projects.neko.description'),
        };
      }
      return project;
    });
  }
  if (slug === 'santiago-villarreal') {
    return projects.map((project) => {
      if (project.title === 'Neko Protocol') {
        return {
          ...project,
          role: t('team.members.santiagoVillarreal.projects.neko.role'),
          description: t('team.members.santiagoVillarreal.projects.neko.description'),
        };
      }
      if (project.title === 'Geko') {
        return {
          ...project,
          role: t('team.members.santiagoVillarreal.projects.geko.role'),
          description: t('team.members.santiagoVillarreal.projects.geko.description'),
        };
      }
      return project;
    });
  }
  if (slug === 'matias-aguilar') {
    return projects.map((project) => {
      if (project.title === 'Neko Protocol') {
        return {
          ...project,
          role: t('team.members.matiasAguilar.projects.neko.role'),
          description: t('team.members.matiasAguilar.projects.neko.description'),
        };
      }
      if (project.title === 'Geko') {
        return {
          ...project,
          role: t('team.members.matiasAguilar.projects.geko.role'),
          description: t('team.members.matiasAguilar.projects.geko.description'),
        };
      }
      if (project.title === 'Pacto') {
        return {
          ...project,
          role: t('team.members.matiasAguilar.projects.pacto.role'),
          description: t('team.members.matiasAguilar.projects.pacto.description'),
        };
      }
      return project;
    });
  }
  if (slug === 'fabian-sanchez') {
    return projects.map((project) => {
      if (project.title === 'Neko Protocol') {
        return {
          ...project,
          role: t('team.members.fabianSanchez.projects.neko.role'),
          description: t('team.members.fabianSanchez.projects.neko.description'),
        };
      }
      if (project.title === 'Geko') {
        return {
          ...project,
          role: t('team.members.fabianSanchez.projects.geko.role'),
          description: t('team.members.fabianSanchez.projects.geko.description'),
        };
      }
      return project;
    });
  }
  return projects;
}

function localizedEducation(
  slug: string,
  education: EducationItem[] | undefined,
  t: TranslateFn
): EducationItem[] | undefined {
  if (!education) return undefined;
  if (slug === 'kevin-latino') {
    return education.map((edu) => {
      if (edu.degree === "Bachelor's Degree in Computer Engineering") {
        return {
          ...edu,
          description: t('team.members.kevinLatino.education.bachelors.description'),
        };
      }
      if (edu.degree === 'Technical High School in Web Development') {
        return {
          ...edu,
          description: t('team.members.kevinLatino.education.highSchool.description'),
        };
      }
      return edu;
    });
  }
  if (slug === 'santiago-villarreal') {
    return education.map((edu) => {
      if (edu.degree === 'Bachelor, Computer Engineering') {
        return {
          ...edu,
          description: t('team.members.santiagoVillarreal.education.tecComputer.description'),
        };
      }
      if (edu.degree === 'Bachelor, Data Science') {
        return {
          ...edu,
          description: t('team.members.santiagoVillarreal.education.leadDataScience.description'),
        };
      }
      return edu;
    });
  }
  if (slug === 'matias-aguilar') {
    return education.map((edu) => {
      if (edu.degree === 'Bachelor, Computer Science') {
        return {
          ...edu,
          description: t('team.members.matiasAguilar.education.bachelors.description'),
        };
      }
      if (edu.degree === 'Intensive English') {
        return {
          ...edu,
          description: t('team.members.matiasAguilar.education.intensiveEnglish.description'),
        };
      }
      return edu;
    });
  }
  if (slug === 'fabian-sanchez') {
    return education.map((edu) => {
      if (edu.degree === 'Bachelor of Computer Science') {
        return {
          ...edu,
          description: t('team.members.fabianSanchez.education.bachelors.description'),
        };
      }
      if (edu.degree === 'High School Diploma') {
        return {
          ...edu,
          description: t('team.members.fabianSanchez.education.highSchool.description'),
        };
      }
      if (edu.degree === 'GitHub Foundations Certification') {
        return {
          ...edu,
          description: t('team.members.fabianSanchez.education.githubFoundations.description'),
        };
      }
      return edu;
    });
  }
  return education;
}

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

  const profileI18nPrefix = MEMBER_PROFILE_I18N_PREFIX[member.slug];

  const displayRole = profileI18nPrefix
    ? t(`team.members.${profileI18nPrefix}.profileRole`)
    : member.profileRole ?? member.role;

  const description = profileI18nPrefix
    ? t(`team.members.${profileI18nPrefix}.description`)
    : member.description;

  const focusTag = profileI18nPrefix
    ? t(`team.members.${profileI18nPrefix}.focusTag`)
    : member.focusTag;

  const workExperience = localizedWorkExperience(member.slug, member.workExperience, t);

  const projects = localizedProjects(member.slug, member.projects, t);

  const education = localizedEducation(member.slug, member.education, t);
  const socialLinks = [
    { key: 'linkedin', href: member.socialLinks.linkedin, Icon: LinkedIn, labelKey: 'team.profile.linkedin' },
    { key: 'github', href: member.socialLinks.github, Icon: GitHub, labelKey: 'team.profile.github' },
    { key: 'twitter', href: member.socialLinks.twitter, Icon: XformerlyTwitter, labelKey: 'team.profile.twitter' },
    { key: 'telegram', href: member.socialLinks.telegram, Icon: TelegramIcon, labelKey: 'team.profile.telegram' },
  ].filter((s) => s.href);

  return (
    <div className={`${CONTAINER_PADDING.HORIZONTAL} pb-20 pt-12 sm:pt-16 md:pt-20`}>
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-4 inline-flex cursor-pointer items-center gap-2.5 text-base text-white/70 transition-colors hover:text-white"
          aria-label={t('team.profile.goBack')}
        >
          <ChevronLeft className="h-6 w-6" />
          {t('team.profile.goBack')}
        </button>

        <ProfileHeader
          member={member}
          displayRole={displayRole}
           description={description}
           focusTag={focusTag}
          socialLinks={socialLinks}
          t={t}
        />

        <EducationSection education={education} t={t} />

        <WorkExperienceSection
          profileKey={member.slug}
          workExperience={workExperience}
          t={t}
        />

        <ProjectsSection
          key={member.slug}
          profileKey={member.slug}
          projects={projects}
          hackathonAwards={member.hackathonAwards}
          t={t}
        />
      </div>
    </div>
  );
}
