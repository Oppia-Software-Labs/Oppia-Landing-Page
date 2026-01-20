import { Navbar } from '@/components/ui/navbar/Navbar';
import { Hero } from '@/modules/hero/Hero';
import { Partners } from '@/modules/partners/Partners';
import { Products } from '@/modules/products/Products';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Products />
    </>
  );
}
