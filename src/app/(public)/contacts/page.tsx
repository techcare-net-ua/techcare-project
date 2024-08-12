import { Metadata } from 'next';

import { HeroSection } from '@/components/contacts';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Description of contact page',
};

export default function AboutUsPage() {
  return <HeroSection />;
}
