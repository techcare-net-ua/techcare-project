import Image from 'next/image';
import Link from 'next/link';

import { Container, InViewSpring, Separator } from '@/components';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/configs';
import { cn, transformIndexToCounter } from '@/helpers';

import { content } from './content';

export const ServicesSection = () => {
  return (
    <section>
      <Container pxDisable className="relative space-y-8 pb-8 pt-8 text-center">
        <h2>{content.title}</h2>
        <Separator />
        <ul className="md:space-y-1">
          {content.servicesData.map(
            ({ title, id, points, description, src }, index) => (
              <InViewSpring
                key={id}
                className="group odd:flex-row-reverse odd:bg-transparent odd:text-left even:text-right md:flex md:gap-1"
              >
                <div
                  className={cn(
                    'hidden p-6 text-left md:flex md:w-[57%] md:flex-col md:justify-between md:gap-4',
                    index % 2 === 0 ? 'bg-secondary' : 'border bg-transparent',
                  )}
                >
                  <div className="space-y-4">
                    <h3
                      className={cn(
                        'from-background to-secondary px-2 py-1 font-medium uppercase tracking-wide md:text-xl lg:text-2xl',
                        index % 2 === 0
                          ? 'bg-gradient-to-r'
                          : 'bg-gradient-to-l',
                      )}
                    >
                      {title}
                    </h3>
                    <p className="lg:sr-only xl:not-sr-only">{description}</p>
                    <ul className="hidden list-disc space-y-2 pl-4 leading-7 lg:block">
                      {points.map((text, idx) => (
                        <li key={idx}>{text}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`${ROUTES.SERVICES.PATH}/${id}`}
                    className="pr-4 text-right underline underline-offset-4 transition-colors hover:text-primary focus:text-primary dark:text-foreground"
                  >
                    {content.watchMore}
                  </Link>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden p-4 transition-colors group-hover:bg-black group-hover:bg-opacity-40 has-[a:focus]:bg-black has-[a:focus]:bg-opacity-30 sm:aspect-video md:w-[43%] lg:aspect-[4/3] xl:aspect-video">
                  <div className="flex h-full flex-col justify-between">
                    <p className="-translate-y-1/2 text-4xl tracking-wide text-primary-foreground opacity-0 drop-shadow-3xl transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-foreground">
                      {transformIndexToCounter(index)}
                    </p>
                    <div className="space-y-2 md:hidden">
                      <p className="translate-y-12 text-xl font-medium uppercase text-primary-foreground drop-shadow-3xl transition-transform group-hover:translate-y-0 dark:text-foreground">
                        {title}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="opacity-0 drop-shadow-3xl transition-all  group-hover:opacity-100 "
                      >
                        <Link href="/services" className="">
                          {content.watchMore}
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <Image
                    src={src}
                    priority
                    className="absolute left-0 top-0 -z-10 h-full w-full translate-y-0 scale-105 object-cover object-center transition-transform group-hover:scale-100"
                    alt="Test Image"
                  />
                </div>
              </InViewSpring>
            ),
          )}
        </ul>
        <Button asChild className="mx-auto">
          <Link href={ROUTES.SERVICES.PATH}>{content.goToAllSevices}</Link>
        </Button>
      </Container>
    </section>
  );
};
