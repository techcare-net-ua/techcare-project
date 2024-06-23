import { Metadata } from 'next';

import { Container } from '@/components';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About us page',
};

export default function Page() {
  return (
    <section>
      <Container>
        <h1>About Us Page</h1>
      </Container>
    </section>
  );
}
