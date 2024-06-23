import { Metadata } from 'next';

import { Container } from '@/components';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Description of shop page',
};

export default function Page() {
  return (
    <section>
      <Container>
        <h1>Future Shop page</h1>
      </Container>
    </section>
  );
}
