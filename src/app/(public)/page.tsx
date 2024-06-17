// Home Page

import {
  ExampleSection,
  FAQSection,
  Hero,
  ServicesSection,
} from '@/components/home';

export default function Page() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FAQSection />
      <ExampleSection />
    </>
  );
}
