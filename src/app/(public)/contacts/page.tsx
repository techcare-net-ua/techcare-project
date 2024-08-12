import { Metadata } from 'next';

import { FeedbackSection, HeroSection } from '@/components/contacts';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Description of contact page',
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <FeedbackSection />
    </>
  );
}
