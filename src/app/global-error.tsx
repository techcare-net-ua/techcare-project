'use client';

import { useEffect } from 'react';

import { PropsError } from '@/types';

export default function GlobalError({ error, reset }: PropsError) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
