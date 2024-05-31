import { Metadata } from 'next';

import { Container } from '@/components';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Services description',
};

export default function Page() {
  return (
    <section>
      <Container>
        <h1>Services Page</h1>
      </Container>
    </section>
  );
}
