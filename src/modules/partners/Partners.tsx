'use client';

import { motion } from 'framer-motion';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { StellarLogo } from '@/components/icons/partners/StellarLogo';
import { CatalitecLogo } from '@/components/icons/partners/CatalitecLogo';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';
import { partnersVariants } from '@/animations/partners';

export function Partners() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <section className={`bg-black ${SECTION_SPACING.SMALL} ${CONTAINER_PADDING.HORIZONTAL}`}>
      <motion.div
        className="mx-auto max-w-6xl"
        variants={partnersVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: '-100px' }}
      >
        <motion.div variants={partnersVariants.title}>
          <SectionHeader
            title={t('partners.title')}
            className="mb-6"
          />
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10"
          variants={partnersVariants.logos}
        >
          <motion.div variants={partnersVariants.logo}>
            <StellarLogo width={160} height={32} className="h-6 w-auto opacity-80 transition-opacity hover:opacity-100" />
          </motion.div>
          <motion.div variants={partnersVariants.logo}>
            <CatalitecLogo width={160} height={32} className="h-6 w-auto opacity-80 transition-opacity hover:opacity-100" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

1