import { Navbar } from '@/components/ui/navbar/Navbar';
import { Hero } from '@/modules/hero/Hero';
import { Partners } from '@/modules/partners/Partners';
import { SocialMedia } from '@/modules/social-media/SocialMedia';
import { Products } from '@/modules/products/Products';
import { Footer } from '@/modules/footer/Footer';
import { FAQ } from '@/modules/faq/FAQ';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Products />
      <SocialMedia />
      <FAQ />
      <Footer />
    </>
  );
}
