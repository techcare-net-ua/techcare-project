import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components';
import { cn, transformIndexToCounter } from '@/helpers';

// import { TypeLucideIcon } from '@/types';
import testImageUrl from '../../../public/test_service.jpg';

interface DataInterface {
  id: string;
  path: string;
  // icon: TypeLucideIcon;
  title: string;
  description: string[];
}

const data: DataInterface[] = [
  {
    id: '1',
    path: '/services',
    title: 'Aдмістрування',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Obcaecati, dicta temporibus eius ipsa nesciunt iste et',
      'A ipsa doloribus sed repellat alias inventore veritatis ea omnis',
      'Fugit molestiae fuga similique, cumque nobis ab aspernatur sit dolorem at obcaecati',
    ],
  },
  {
    id: '2',
    path: '/services',
    title: 'Профілактика',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Obcaecati, dicta temporibus eius ipsa nesciunt iste et',
      'A ipsa doloribus sed repellat alias inventore veritatis ea omnis',
      'Fugit molestiae fuga similique, cumque nobis ab aspernatur sit dolorem at obcaecati',
    ],
  },
  {
    id: '3',
    path: '/services',
    title: 'Підтримка серверів',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Obcaecati, dicta temporibus eius ipsa nesciunt iste et',
      'A ipsa doloribus sed repellat alias inventore veritatis ea omnis',
      'Fugit molestiae fuga similique, cumque nobis ab aspernatur sit dolorem at obcaecati',
    ],
  },
  {
    id: '4',
    path: '/services',
    title: 'Ремонт',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      'Obcaecati, dicta temporibus eius ipsa nesciunt iste et',
      'A ipsa doloribus sed repellat alias inventore veritatis ea omnis',
      'Fugit molestiae fuga similique, cumque nobis ab aspernatur sit dolorem at obcaecati',
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section className="">
      <Container pxDisable className="relative space-y-8 pb-0 pt-8">
        <h2 className="px-4 text-center uppercase">Що ми якісно робимо</h2>
        <ul className="md:space-y-1">
          {data.map(({ title, id, description }, index) => (
            <li
              key={id}
              className="even:flex-row-reverse even:bg-transparent even:text-right md:flex md:gap-1"
            >
              <div className="group relative aspect-[4/3] overflow-hidden p-4 transition-colors hover:bg-black hover:bg-opacity-30 has-[a:focus]:bg-black has-[a:focus]:bg-opacity-30 sm:aspect-video md:w-[43%] lg:aspect-[4/3] xl:aspect-video">
                <div className="flex h-full flex-col justify-between">
                  <p className="drop-shadow-3xl -translate-y-1/2 text-4xl tracking-wide text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-foreground">
                    {transformIndexToCounter(index)}
                  </p>
                  <div className="md:hidden">
                    <h3 className="translate-y-6 text-2xl font-medium uppercase text-primary-foreground drop-shadow-2xl transition-transform group-hover:translate-y-0 dark:text-foreground">
                      {title}
                    </h3>

                    <Link
                      href="/services"
                      className="drop-shadow-3xl text-primary-foreground underline underline-offset-4 opacity-0 transition-all hover:text-primary focus:text-primary group-hover:opacity-100 dark:text-foreground"
                    >
                      Дізнатись більше
                    </Link>
                  </div>
                </div>
                <Image
                  src={testImageUrl}
                  priority
                  className="absolute left-0 top-0 -z-10 h-full w-full translate-y-0 scale-105 object-cover object-center transition-transform group-hover:scale-100"
                  alt="Test Image"
                />
              </div>
              <div
                className={cn(
                  'hidden p-6 text-left md:flex md:w-[57%] md:flex-col md:justify-between md:gap-4',
                  index % 2 === 0 ? 'bg-secondary' : 'border bg-transparent',
                )}
              >
                <div className="space-y-4">
                  <p className="text-2xl font-medium uppercase tracking-wide">
                    {title}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur amet ut, natus atque deserunt ratione, consectetur,
                    dicta assumenda omnis eveniet perferendis consequatur.
                  </p>
                  <ul className="hidden list-disc space-y-2 pl-4 leading-7 lg:block">
                    {description.map((text, idx) => (
                      <li key={idx}>{text}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/services"
                  className="pr-4 text-right underline underline-offset-4 transition-colors hover:text-primary focus:text-primary dark:text-foreground"
                >
                  Дізнатись більше
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
