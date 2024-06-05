'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { PropsError } from '@/types';

export default function Error({ error, reset }: PropsError) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
