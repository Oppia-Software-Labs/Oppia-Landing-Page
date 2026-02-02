'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { StellarLogo } from '@/components/icons/partners/StellarLogo';
import { CatalitecLogo } from '@/components/icons/partners/CatalitecLogo';
import { Footer } from '@/modules/footer/Footer';
import { ProjectCTA } from '@/modules/projects/ProjectCTA';
import { initFlipOnScroll } from '@/utils/flipAnimation';
import { ANIMATION_TIMING, getProjectLogoPath } from '@/constants/projects';
import { ProductSlug } from '@/constants/products';
import { BottomCTASection } from '@/components/cta/BottomCTASection';
import { useVideoPlaybackControl } from '@/hooks/useVideoPlaybackControl';
import { projectPageVariants } from '@/animations/projectPage';
import 'animate.css';

const VALID_SLUGS = ['neko', 'geko', 'deko'] as const;
type ProjectSlug = typeof VALID_SLUGS[number];


function getProductTranslationKey(slug: string): string {
  return slug === 'deko' ? 'deko' : slug;
}

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    let cleanupFn: (() => void) | null = null;

    const initTimeout = setTimeout(() => {
      requestAnimationFrame(() => {
        cleanupFn = initFlipOnScroll();
      });
    }, ANIMATION_TIMING.INIT_DELAY);

    return () => {
      clearTimeout(initTimeout);
      if (cleanupFn) {
        cleanupFn();
      }
    };
  }, [slug]);

  useVideoPlaybackControl(videoRef, [slug]);

  if (!VALID_SLUGS.includes(slug as ProjectSlug)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-white">Project not found</p>
      </div>
    );
  }

  const translationKey = getProductTranslationKey(slug);
  const projectName = t(`products.${translationKey}.name`);

  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      <section className="animate__fadeInRight animate__animated flex flex-col justify-center items-center pt-[2vh] sm:pt-[4vh] lg:pt-[5vh] pb-[2vh] px-[2vw] relative">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001D66] to-[#03A7FF] min-h-[60vh] sm:min-h-[80vh] lg:min-h-[90vh] w-[96vw] max-w-[96vw]">
          <div className="absolute top-0 left-0 z-0 -translate-x-1/4">
            <Image
              src="/oppia-projects/left-wave.svg"
              alt=""
              width={1100}
              height={500}
              className="h-[500px] w-[1100px] opacity-100"
              aria-hidden="true"
            />
          </div>

          <div className="absolute bottom-0 right-0 z-0 translate-x-1/4">
            <Image
              src="/oppia-projects/right-wave.svg"
              alt=""
              width={950}
              height={650}
              className="h-[650px] w-[950px] opacity-100"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 min-h-[60vh] sm:min-h-[80vh] lg:min-h-[90vh] px-5 py-6 sm:p-12 lg:p-16 flex flex-col items-center justify-center gap-4 sm:gap-12">
            <div className="flex justify-center items-center w-full">
              <Image
                src={getProjectLogoPath(slug)}
                alt={`${projectName} Logo`}
                width={400}
                height={400}
                className="h-32 w-auto sm:h-60 md:h-72 lg:h-80 brightness-0 invert mx-auto block"
                priority
              />
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="absolute z-10 bottom-8 left-8 right-8 lg:left-12 lg:right-12 lg:bottom-12">
            <BottomCTASection
              description={t(`projectCta.bottomDescription.${slug}`)}
              ctaText={t(`projectCta.bottomCtaText.${slug}`)}
              buttons={[
                {
                  text: t('cta.discoverButton'),
                  variant: 'primary',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section
        ref={videoSectionRef}
        className="flex flex-col justify-center items-center min-h-0 sm:min-h-screen pt-[3vh] pb-[6vh] sm:pb-[10vh] lg:pb-[15vh] px-[5vw] relative gap-4 sm:gap-[1.5em]"
      >
        <motion.p
          className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center uppercase"
          variants={projectPageVariants.discoverTitle}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          Discover What {projectName} is
        </motion.p>

        <div className="rounded-2xl w-[20em] sm:w-[15em] relative">
          <div className="pt-[56.25%]"></div>
          <div data-flip-element="wrapper" className="w-full h-full absolute top-0 left-0">
            <div
              data-flip-element="target"
              className="will-change-transform bg-[#d2800f] rounded-2xl justify-center items-center w-full h-full flex absolute top-0 left-0 overflow-hidden isolation-isolate"
              style={{ transform: 'translateX(0) rotate(0.001deg)' }}
            >
              <video
                ref={videoRef}
                playsInline
                loop
                muted={false}
                controls={false}
                className="object-cover w-full h-full absolute rounded-inherit"
              >
                <source src="/pitch/pitch.mp4" type="video/mp4" />
              </video>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 138 138"
                fill="none"
                className="text-white mix-blend-overlay w-[6.25em] sm:w-[5em] absolute"
              >
                <path
                  d="M81.7432 46.534C79.5777 48.6995 75.875 47.1659 75.875 44.1034V0.25H62.125V51.8124C62.125 57.5079 57.5079 62.1249 51.8125 62.1249H0.25V75.8749H44.1034C47.1659 75.8749 48.6996 79.5776 46.5341 81.7431L16.0136 112.263L25.7364 121.986L56.2569 91.466C58.416 89.3069 62.1031 90.825 62.125 93.8693V137.75H75.8751L75.875 86.1874C75.875 80.492 80.4921 75.8749 86.1875 75.8749H137.75V62.1249H93.8692C90.8339 62.1031 89.3157 58.4375 91.4469 56.2759L91.4659 56.2569L121.986 25.7363L112.264 16.0137L81.7432 46.534Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen pb-[15vh] px-[5vw] relative gap-[15vh] pt-[15vh]">
        <div className="rounded-2xl w-full relative">
          <div className="pt-[56.25%]"></div>
          <div data-flip-element="wrapper" className="w-full h-full absolute top-0 left-0"></div>
        </div>
      </section>

      <motion.section
        className="flex flex-col justify-center items-center pb-[3vh] px-[5vw] relative"
        variants={projectPageVariants.poweredBy}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.p
          className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-4"
          variants={projectPageVariants.poweredByTitle}
        >
          Powered by
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8"
          variants={projectPageVariants.poweredByLogos}
        >
          <motion.div variants={projectPageVariants.poweredByLogo}>
            <StellarLogo width={160} height={32} className="h-7 sm:h-8 lg:h-9 w-auto opacity-80 transition-opacity hover:opacity-100" />
          </motion.div>
          <motion.div variants={projectPageVariants.poweredByLogo}>
            <CatalitecLogo width={160} height={32} className="h-7 sm:h-8 lg:h-9 w-auto opacity-80 transition-opacity hover:opacity-100" />
          </motion.div>
        </motion.div>
      </motion.section>

      {VALID_SLUGS.includes(slug as ProjectSlug) && (
        <ProjectCTA slug={slug as ProductSlug} locale={locale} />
      )}

      <Footer />
    </div>
  );
}

