import { Navbar } from '@/components/ui/navbar/Navbar';
import { Hero } from '@/modules/hero/Hero';
import { Partners } from '@/modules/partners/Partners';
import { WhoWeAre } from '@/modules/who-we-are/WhoWeAre';
import { FAQ } from '@/modules/faq/FAQ';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <WhoWeAre />
      <FAQ />
    </>
  );
}
