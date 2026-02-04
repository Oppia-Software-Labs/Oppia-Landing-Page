'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const m = window.matchMedia('(max-width: 767px)');
    setIsResponsive(m.matches);
    const fn = () => setIsResponsive(m.matches);
    m.addEventListener('change', fn);
    return () => m.removeEventListener('change', fn);
  }, []);

  // En responsive no hay efecto flip (el video no “baja”), solo tap para play
  useEffect(() => {
    if (typeof window === 'undefined' || isResponsive) {
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
  }, [slug, isResponsive]);

  useVideoPlaybackControl(videoRef, [slug], { enabled: !isResponsive });

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
          {/* Left wave - más separada (un poco más a la izquierda) */}
          <div className="absolute top-0 left-0 z-0 -translate-x-[32%] max-md:-translate-x-[38%]">
            <Image
              src="/oppia-projects/left-wave.svg"
              alt=""
              width={1100}
              height={500}
              className="h-[500px] w-[1100px] max-md:h-[380px] max-md:w-[840px] opacity-100"
              aria-hidden="true"
            />
          </div>

          {/* Right wave - más separada (un poco más a la derecha) */}
          <div className="absolute bottom-0 right-0 z-0 translate-x-[32%] max-md:translate-x-[38%]">
            <Image
              src="/oppia-projects/right-wave.svg"
              alt=""
              width={950}
              height={650}
              className="h-[650px] w-[950px] max-md:h-[480px] max-md:w-[700px] opacity-100"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 min-h-[60vh] sm:min-h-[80vh] lg:min-h-[90vh] px-4 py-6 sm:px-8 sm:py-8 lg:p-16 flex flex-col items-center justify-center gap-4 sm:gap-10 max-lg:-translate-y-6 sm:max-lg:-translate-y-8 lg:translate-y-0">
            <div className="flex justify-center items-center w-full flex-1 min-h-0">
              <Image
                src={getProjectLogoPath(slug)}
                alt={`${projectName} Logo`}
                width={400}
                height={400}
                className="h-28 w-auto sm:h-52 md:h-72 lg:h-80 brightness-0 invert mx-auto block max-w-[85%]"
                priority
              />
            </div>
          </div>

          {/* Bottom CTA Section - texto "Neko enables..." y botón Discover más arriba */}
          <div className="absolute z-10 bottom-8 left-5 right-5 sm:bottom-10 sm:left-6 sm:right-6 lg:left-12 lg:right-12 lg:bottom-12">
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

      {isResponsive ? (
        <section
          ref={videoSectionRef}
          className="flex flex-col justify-center items-center pt-[12vh] pb-[6vh] px-[5vw] relative gap-4"
        >
          <motion.p
            className="text-white text-xl font-semibold text-center uppercase"
            variants={projectPageVariants.discoverTitle}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Discover What {projectName} is
          </motion.p>
          <div className="rounded-2xl w-[min(92vw,20em)] relative mx-auto overflow-hidden">
            <div className="pt-[56.25%]" />
            <video
              ref={videoRef}
              playsInline
              loop
              muted={false}
              controls
              className="absolute inset-0 w-full h-full object-cover rounded-2xl border-0 outline-none"
            >
              <source src="/pitch/pitch.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      ) : (
        <>
          <section
            ref={videoSectionRef}
            className="flex flex-col justify-center items-center min-h-screen pt-[3vh] pb-[10vh] lg:pb-[15vh] px-[5vw] relative gap-4 sm:gap-[1.5em]"
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
            <div className="rounded-2xl w-[22em] relative mx-auto">
              <div className="pt-[56.25%]" />
              <div data-flip-element="wrapper" className="w-full h-full absolute top-0 left-0">
                <div
                  data-flip-element="target"
                  className="will-change-transform rounded-2xl justify-center items-center w-full h-full flex absolute top-0 left-0 overflow-hidden isolation-isolate"
                  style={{ transform: 'translateX(0) rotate(0.001deg)' }}
                >
                  <video
                    ref={videoRef}
                    playsInline
                    loop
                    muted={false}
                    controls={false}
                    onClick={(e) => {
                      e.currentTarget.paused ? e.currentTarget.play() : e.currentTarget.pause();
                    }}
                    className="object-cover w-full h-full absolute rounded-inherit border-0 outline-none cursor-pointer"
                  >
                    <source src="/pitch/pitch.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center min-h-screen pb-[15vh] px-[5vw] relative gap-[15vh] pt-[15vh]">
            <div className="rounded-2xl w-full relative">
              <div className="pt-[56.25%]" />
              <div data-flip-element="wrapper" className="w-full h-full absolute top-0 left-0" />
            </div>
          </section>
        </>
      )}

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

