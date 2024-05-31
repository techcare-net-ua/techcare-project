'use client';

import { useEffect } from 'react';

import { PropsError } from '@/types';
import { Button } from '@/ui/button';

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
