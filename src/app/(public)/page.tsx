// Home Page

import {
  AdvantagesSection,
  FAQSection,
  Hero,
  ServicesSection,
  TariffsSection,
} from '@/components/home';
import { getStrapiData } from '@/components/home/HeroSection/data';

export default async function Page() {
  const strapiData = await getStrapiData('/api/home-page');

  const { blocks } = strapiData;
  return (
    <>
      <Hero data={blocks[0]} />
      <AdvantagesSection />
      <ServicesSection />
      <TariffsSection />
      <FAQSection />
    </>
  );
}
