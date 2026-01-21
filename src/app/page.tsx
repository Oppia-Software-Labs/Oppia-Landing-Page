import { Navbar } from '@/components/ui/navbar/Navbar';
import { Hero } from '@/modules/hero/Hero';
import { Partners } from '@/modules/partners/Partners';
import { SocialMedia } from '@/modules/social-media/SocialMedia';
import { Products } from '@/modules/products/Products';
import { Team } from '@/modules/team/Team';
import { CTA } from '@/modules/cta/CTA';
import { Footer } from '@/modules/footer/Footer';
import { FAQ } from '@/modules/faq/FAQ';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Products />
      <Team />
      <SocialMedia />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}
