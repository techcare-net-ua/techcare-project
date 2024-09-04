'use client';
import { useEffect } from 'react';
import Image from 'next/image';

import { Container } from '@/components';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="mt-[10%] flex min-h-screen flex-col items-center">
        <div className="space-y-4">
          <Image
            priority
            src="/icon/errors-img.jpg"
            alt="Icon errors"
            height={300}
            width={300}
            className="m-auto"
          />
          <h1 className="text-2xl font-bold sm:text-4xl">
            Ой! Щось пішло не так.
          </h1>
          <p className=" text-sm sm:text-lg">
            Це сторінка помилки. Спробуйте пізніше.
          </p>
        </div>
      </div>
    </Container>
  );
}
