// Home Page

import {
  AdvantagesSection,
  // ExampleSection,
  FAQSection,
  Hero,
  ServicesSection,
} from '@/components/home';

export default function Page() {
  return (
    <>
      <Hero />
      <AdvantagesSection />
      <ServicesSection />
      <FAQSection />
      {/* <ExampleSection /> */}
    </>
  );
}
