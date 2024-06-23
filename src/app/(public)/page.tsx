// Home Page

import {
  AdvantagesSection,
  FAQSection,
  Hero,
  ServicesSection,
  TariffsSection,
} from '@/components/home';

export default function Page() {
  return (
    <>
      <Hero />
      <AdvantagesSection />
      <ServicesSection />
      <TariffsSection />
      <FAQSection />
    </>
  );
}
