import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components';

export default function NotFoundRoot() {
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
          <h1 className="text-2xl font-bold sm:text-4xl ">Упс!</h1>
          <p className="text-sm sm:text-lg">Такої сторінки не існує</p>
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-xs font-medium text-background hover:bg-primary/90 sm:text-sm "
            >
              Повернутись на головну
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
