'use client';

import { useEffect } from 'react';

import { Container } from '@/components';
import { Button } from '@/components/ui/button';
import { PropsError } from '@/types';

export default function Error({ error, reset }: PropsError) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="container">
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </Container>
  );
}
