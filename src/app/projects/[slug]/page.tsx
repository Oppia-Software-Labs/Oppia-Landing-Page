'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { StellarLogo } from '@/components/icons/partners/StellarLogo';
import { CatalitecLogo } from '@/components/icons/partners/CatalitecLogo';
import { SocialCard } from '@/modules/cta/SocialCard';
import { CTA_CONFIG } from '@/constants/cta';
import { SOCIAL_LINKS } from '@/constants/socialLinks';
import { InstagramIcon } from '@/components/icons/social-media/InstagramIcon';
import { XIcon } from '@/components/icons/social-media/XIcon';
import { DiscordIcon } from '@/components/icons/social-media/DiscordIcon';
import { LinkedInIcon } from '@/components/icons/social-media/LinkedInIcon';
import { SECTION_SPACING, CONTAINER_PADDING } from '@/constants/layout';
import { Footer } from '@/modules/footer/Footer';

let gsap: any;
let ScrollTrigger: any;
let Flip: any;

if (typeof window !== 'undefined') {
  gsap = require('gsap').gsap;
  ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger;
  Flip = require('gsap/Flip').Flip;
  if (gsap && ScrollTrigger && Flip) {
    gsap.registerPlugin(ScrollTrigger, Flip);
  }
}

function initFlipOnScroll() {
  if (!gsap || !ScrollTrigger || !Flip) {
    console.error('GSAP plugins not loaded');
    return;
  }

  let wrapperElements = document.querySelectorAll("[data-flip-element='wrapper']");
  let targetEl = document.querySelector("[data-flip-element='target']");

  console.log('Wrappers:', wrapperElements.length);
  console.log('Target:', !!targetEl);

  if (!wrapperElements.length || !targetEl) {
    console.error('Missing elements - wrappers:', wrapperElements.length, 'target:', !!targetEl);
    return;
  }

  if (wrapperElements.length < 2) {
    console.error('Not enough wrappers:', wrapperElements.length);
    return;
  }

  // Kill any existing ScrollTriggers first
  ScrollTrigger.getAll().forEach((st: any) => st.kill());

  let tl: any;
  function flipTimeline() {
    if (tl) {
      tl.kill();
      gsap.set(targetEl, { clearProps: 'all' });
    }

    // Refresh ScrollTrigger to recalculate
    ScrollTrigger.refresh();

    // Use the first and last wrapper elements for the scroll trigger.
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperElements[0] as HTMLElement,
        start: 'center center',
        endTrigger: wrapperElements[wrapperElements.length - 1] as HTMLElement,
        end: 'center center',
        scrub: 0.25,
      },
    });

    // Loop through each wrapper element.
    wrapperElements.forEach(function (element, index) {
      let nextIndex = index + 1;
      if (nextIndex < wrapperElements.length) {
        let nextWrapperEl = wrapperElements[nextIndex] as HTMLElement;
        let thisWrapperEl = element as HTMLElement;
        // Calculate vertical center positions relative to the document.
        let nextRect = nextWrapperEl.getBoundingClientRect();
        let thisRect = thisWrapperEl.getBoundingClientRect();
        let scrollY = window.pageYOffset || window.scrollY || 0;
        let nextDistance = nextRect.top + scrollY + nextWrapperEl.offsetHeight / 2;
        let thisDistance = thisRect.top + scrollY + thisWrapperEl.offsetHeight / 2;
        let offset = nextDistance - thisDistance;

        console.log(`Adding Flip from wrapper ${index} to ${nextIndex}, offset: ${offset}`);

        // Add the Flip.fit tween to the timeline.
        tl.add(
          Flip.fit(targetEl, nextWrapperEl, {
            duration: offset,
            ease: 'none',
          })
        );
      }
    });

    console.log('Timeline created successfully');
  }

  flipTimeline();

  let resizeTimer: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      flipTimeline();
    }, 100);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
    if (tl) tl.kill();
    ScrollTrigger.getAll().forEach((st: any) => st.kill());
  };
}

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let cleanupFn: (() => void) | undefined;

      // Wait for DOM to be fully ready - use requestAnimationFrame to ensure render is complete
      const initTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          cleanupFn = initFlipOnScroll();
        });
      }, 200);

      return () => {
        clearTimeout(initTimeout);
        if (cleanupFn) cleanupFn();
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((st: any) => st.kill());
        }
      };
    }
  }, [slug]);

  if (!VALID_SLUGS.includes(slug as ProjectSlug)) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-white">Project not found</p>
      </div>
    );
  }

  const translationKey = getProductTranslationKey(slug);
  const projectName = t(`products.${translationKey}.name`);

  // Get logo filename based on slug
  const getLogoPath = (slug: string) => {
    return `/oppia-projects/Logotypes/${slug}-logotype.svg`;
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-black">
      <section className="flex flex-col justify-center items-center pt-[5vh] pb-[2vh] px-[2vw] relative">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#001D66] to-[#03A7FF] min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] w-[96vw] max-w-[96vw]">
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

          <div className="relative z-10 min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center gap-12">
            <div>
              <Image
                src={getLogoPath(slug)}
                alt={`${projectName} Logo`}
                width={400}
                height={400}
                className="h-48 w-auto sm:h-60 md:h-72 lg:h-80 brightness-0 invert"
                priority
              />
            </div>
          </div>
          
          {/* Content Section at Bottom Corners */}
          <div className="absolute z-10 bottom-8 left-8 right-8 lg:left-12 lg:right-12 lg:bottom-12">
            {/* Divider Line */}
            <div className="w-full border-t border-white/20 mb-6"></div>
            
            {/* Content Section */}
            <div className="w-full flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center">
              {/* Left: Description */}
              <div className="max-w-md">
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {t(`products.${translationKey}.description`)}
                </p>
              </div>
              
              {/* Right: CTA Text and Buttons */}
              <div className="flex flex-col gap-3 items-start lg:items-end">
                <p className="text-white text-sm sm:text-base font-medium">
                  Unlock the power of tokenized real-world assets
                </p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 text-sm rounded-full bg-white/90 text-[#001D66] font-medium hover:bg-white transition-all">
                    Discover →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen pt-[2vh] pb-[15vh] px-[5vw] relative gap-[1.5em]">
        <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-center uppercase">
          Discover What {projectName} is
        </p>

        <div className="rounded-2xl w-[20em] sm:w-[15em] relative">
          <div className="pt-[56.25%]"></div>
          <div data-flip-element="wrapper" className="w-full h-full absolute top-0 left-0">
            <div
              data-flip-element="target"
              className="will-change-transform bg-[#d2800f] rounded-2xl justify-center items-center w-full h-full flex absolute top-0 left-0 overflow-hidden isolation-isolate"
              style={{ transform: 'translateX(0) rotate(0.001deg)' }}
            >
              <video
                autoPlay
                muted
                playsInline
                loop
                webkit-playsinline=""
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

      <section className="flex flex-col justify-center items-center pb-[3vh] px-[5vw] relative">
        <p className="text-white text-sm sm:text-base lg:text-lg font-normal mb-4">
          Powered by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <StellarLogo width={150} height={30} className="h-6 w-auto opacity-80 transition-opacity hover:opacity-100" />
          <CatalitecLogo width={150} height={30} className="h-6 w-auto opacity-80 transition-opacity hover:opacity-100" />
        </div>
      </section>

      {slug === 'neko' && (
        <section className={`relative bg-black overflow-hidden ${SECTION_SPACING.MEDIUM} ${CONTAINER_PADDING.HORIZONTAL}`}>
          <div className="relative z-10 mx-auto max-w-7xl">
            {/* Top Text Sections */}
            <div className="mb-8 flex flex-col gap-4 text-center">
              <p className="text-2xl sm:text-3xl text-white font-medium whitespace-pre-line">
                {t('cta.topTextLeft')}
              </p>
              <p className="text-sm text-white/80 whitespace-pre-line">
                {t('cta.topTextRight')}
              </p>
            </div>
            <div className="relative rounded-3xl bg-gradient-to-b from-[#03A7FF] to-[#00398F] p-10 sm:p-14 lg:p-28 overflow-hidden">
              {/* Left Wave */}
              <div className="absolute bottom-0 left-0 z-0 -translate-x-1/4">
                <Image
                  src="/visuals/cta/left-wave.svg"
                  alt=""
                  width={CTA_CONFIG.WAVES.LEFT.width}
                  height={CTA_CONFIG.WAVES.LEFT.height}
                  className={`h-[${CTA_CONFIG.WAVES.LEFT.height}px] w-[${CTA_CONFIG.WAVES.LEFT.width}px] opacity-100 brightness-150`}
                  aria-hidden="true"
                />
              </div>

              {/* Right Wave */}
              <div className="absolute top-0 right-0 z-0 translate-x-1/4">
                <Image
                  src="/visuals/cta/right-wave.svg"
                  alt=""
                  width={CTA_CONFIG.WAVES.RIGHT.width}
                  height={CTA_CONFIG.WAVES.RIGHT.height}
                  className={`h-[${CTA_CONFIG.WAVES.RIGHT.height}px] w-[${CTA_CONFIG.WAVES.RIGHT.width}px] opacity-100 brightness-150`}
                  aria-hidden="true"
                />
              </div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Side - Logo, Description, Social Cards */}
                <div className="flex flex-col">
                  <div className="mb-6">
                    <Image
                      src="/oppia-projects/Logotypes/Neko.svg"
                      alt="Neko Logo"
                      width={48}
                      height={48}
                      className="h-12 w-auto mb-4 brightness-0 invert"
                    />
                    <p className="text-base text-white/90 leading-relaxed max-w-md">
                      {t('cta.description')}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <SocialCard href="https://www.nekoprotocol.xyz/" label={t('cta.website')} />
                    <SocialCard href="https://x.com/NekoProto" label={t('cta.twitter')} />
                  </div>
                </div>

                {/* Right Side - Large Social Icons */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="flex gap-0 items-end">
                    {/* Instagram */}
                    <a
                      href={SOCIAL_LINKS.INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.translateY}`}
                      aria-label="Visit our Instagram"
                    >
                      <InstagramIcon className={`${CTA_CONFIG.LARGE_ICONS.INSTAGRAM.iconSize} text-white`} />
                    </a>

                    {/* X/Twitter */}
                    <a
                      href={SOCIAL_LINKS.TWITTER}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${CTA_CONFIG.LARGE_ICONS.TWITTER.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.TWITTER.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.TWITTER.translateY}`}
                      aria-label="Visit our X (Twitter)"
                    >
                      <XIcon className={`${CTA_CONFIG.LARGE_ICONS.TWITTER.iconSize} text-white`} />
                    </a>

                    {/* Discord */}
                    <a
                      href={SOCIAL_LINKS.DISCORD}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${CTA_CONFIG.LARGE_ICONS.DISCORD.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.DISCORD.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 -mr-3 ${CTA_CONFIG.LARGE_ICONS.DISCORD.translateY}`}
                      aria-label="Join our Discord"
                    >
                      <DiscordIcon className={`${CTA_CONFIG.LARGE_ICONS.DISCORD.iconSize} text-white`} />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={SOCIAL_LINKS.LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${CTA_CONFIG.LARGE_ICONS.LINKEDIN.size} rounded-2xl bg-[#FFFFFF]/16 backdrop-blur-sm border-2 border-white flex items-center justify-center ${CTA_CONFIG.LARGE_ICONS.LINKEDIN.rotation} transition-all hover:bg-[#FFFFFF]/24 hover:scale-105 ${CTA_CONFIG.LARGE_ICONS.LINKEDIN.translateY}`}
                      aria-label="Visit our LinkedIn"
                    >
                      <LinkedInIcon className={`${CTA_CONFIG.LARGE_ICONS.LINKEDIN.iconSize} text-white`} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

