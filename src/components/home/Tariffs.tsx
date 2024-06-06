import { Container } from '@/components';

import { CardForTariff } from './CardForTariff';

export const Tariffs = () => {
  return (
    <Container>
      {/* <Container className='max-w-lg rounded-3xl'>
        <div>Contractor Management</div>
        <h3>FREE</h3>
        <p>Manage and pay international contractors</p>
        <div>*No commitments. Cancel anytime.</div>
      </Container> */}
      <CardForTariff />
    </Container>
  );
};
