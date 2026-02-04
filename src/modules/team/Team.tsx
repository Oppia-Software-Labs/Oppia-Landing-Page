'use client';

import { motion } from 'framer-motion';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { useMomentumHover } from '@/hooks/useMomentumHover';
import { teamMembers } from '@/utils/getTeamMembers';
import { TeamCard } from '@/components/team/TeamCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';
import { teamVariants } from '@/animations/team';

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
      <motion.div
        className={`mx-auto max-w-7xl ${CONTAINER_PADDING.HORIZONTAL}`}
        variants={teamVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: '-100px' }}
      >
        <motion.div variants={teamVariants.title}>
          <SectionHeader
            title={t('team.title')}
            subtitle={t('team.description')}
            className="mb-6 md:mb-10"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row md:flex-nowrap md:justify-center md:gap-6 md:overflow-x-auto md:scroll-smooth team-cards-container flex-wrap justify-center gap-5 items-center px-4 md:px-0"
        variants={teamVariants.cards}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: '-100px' }}
      >
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={teamVariants.item} className="w-full max-w-[250px] max-[389px]:max-w-[230px] md:max-w-none md:w-auto">
            <TeamCard member={member} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

