// Home Page

import {
  AdvantagesSection,
  FAQSection,
  Hero,
  ServicesSection,
  TariffsSection,
} from '@/components/home';
// import Slider from '@/components/home/Slider/Slider';

export default function Page() {
  return (
    <>
      <Hero />
      <AdvantagesSection />
      <ServicesSection />
      <TariffsSection />
      {/* <Slider /> */}
      <FAQSection />
    </>
  );
}
