import { Metadata } from 'next';

import { Container } from '@/components';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Description of contact page',
};

export default function AboutUsPage() {
  return (
    <section>
      <Container>
        <h1>Contacts page</h1>
      </Container>
    </section>
  );
}
