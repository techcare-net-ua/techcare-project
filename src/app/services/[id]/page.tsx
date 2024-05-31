import { Container } from '@/components';
import { PropsParams } from '@/types';

export default function Page({ params }: PropsParams) {
  return (
    <section>
      <Container>
        <h1>Name of service {params.id}</h1>
      </Container>
    </section>
  );
}
