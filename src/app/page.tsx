'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useAppStore } from '@/store/store';
import { Navbar } from '@/components/ui/navbar/Navbar';
import { Hero } from '@/modules/hero/Hero';
import { Partners } from '@/modules/partners/Partners';
import { WhoAreWe } from '@/modules/who-are-we/WhoAreWe';
import { SocialMedia } from '@/modules/social-media/SocialMedia';
import { Products } from '@/modules/products/Products';
import { Team } from '@/modules/team/Team';
import { CTA } from '@/modules/cta/CTA';
import { Footer } from '@/modules/footer/Footer';
import { FAQ } from '@/modules/faq/FAQ';

const localeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function Home() {
  const locale = useAppStore((state) => state.locale);
  const { scrollToElement } = useSmoothScroll();

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const attempts = [100, 300, 500, 800];
        attempts.forEach((delay) => {
          setTimeout(() => scrollToElement(hash, 100, 0), delay);
        });
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- scrollToElement estable, solo hash
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={locale}
          initial={localeTransition.initial}
          animate={localeTransition.animate}
          exit={localeTransition.exit}
          transition={localeTransition.transition}
        >
          <section id="hero">
            <Hero />
          </section>
          <section id="partners">
            <Partners />
          </section>
          <section id="who-are-we">
            <WhoAreWe />
          </section>
          <section id="products">
            <Products />
          </section>
          <section id="team">
            <Team />
          </section>
          <section id="social-media">
            <SocialMedia />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="cta">
            <CTA />
          </section>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
