'use client';

import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useMomentumHover } from '@/hooks/useMomentumHover';
import { teamMembers } from '@/utils/getTeamMembers';
import { TeamCard } from '@/components/team/TeamCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';

/**
 * Team section component
 * 
 * Displays the team members in a horizontal layout with:
 * - Section header with title and description
 * - Team member cards with images, names, roles, and social links
 * - Momentum hover effects on cards
 * - Responsive grid layout
 * 
 * Uses i18n for internationalization support
 * 
 * @returns The Team section component
 */
export function Team() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  useMomentumHover();

  return (
    <section
      className={`bg-black ${SECTION_SPACING.MEDIUM}`}
      data-momentum-hover-init=""
    >
      <div className={`mx-auto max-w-7xl ${CONTAINER_PADDING.HORIZONTAL}`}>
        <SectionHeader
          title={t('team.title')}
          subtitle={t('team.description')}
          className="mb-12"
        />
          </div>

      <div className="flex flex-nowrap justify-center gap-8 overflow-x-auto scroll-smooth team-cards-container">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

