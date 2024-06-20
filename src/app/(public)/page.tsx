// Home Page

import {
  AdvantagesSection,
  FAQSection,
  Hero,
  ServicesSection,
  Tariffs,
} from '@/components/home';

export default function Page() {
  return (
    <>
      <Hero />
      <AdvantagesSection />
      <Tariffs />
      <ServicesSection />
      <FAQSection />
    </>
  );
}
