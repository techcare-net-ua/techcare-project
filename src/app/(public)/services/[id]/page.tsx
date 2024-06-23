import { redirect } from 'next/navigation';

import { Container } from '@/components';
import { timeout } from '@/helpers';
import { PropsParams } from '@/types';

const fetchService = async (id: string) => {
  const start = Date.now();
  console.log('start', start);
  const data = await timeout(3000, id !== '2' ? 'success' : 'error');
  const end = Date.now();
  console.log('End', end);
  console.log('diff', end - start);
  return data;
};

export default async function Page({ params }: PropsParams) {
  const data = await fetchService(params.id);

  if (!data) {
    redirect('/services');
  }

  return (
    <section>
      <Container>
        <h1>Name of service {params.id}</h1>
        {data}
      </Container>
    </section>
  );
}
