'use client';

import { FC, ReactNode, useState } from 'react';
import AutoHeight from 'embla-carousel-auto-height';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { DotButton, useDotButton } from '@/components/ui/carousel-dot-buttons';
import { cn } from '@/helpers';

export const Swiper: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          loop: false,
        }}
        plugins={[
          AutoHeight({
            breakpoints: {
              '(min-width: 768px)': { active: false },
            },
          }),
        ]}
      >
        <CarouselContent className="-ml-7 transition-[height] duration-500">
          {children}
        </CarouselContent>
        <CarouselPrevious className="-left-4 hidden lg:block" />
        <CarouselNext className="-right-4 hidden lg:block" />
      </Carousel>
      <div className="grid grid-flow-col justify-center gap-x-2">
        {scrollSnaps.map((_, index) => {
          return (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn('h-6 w-6 rounded-full border-2 border-border',
                index === selectedIndex && 'border-accent-foreground',
              )}
            />
          );
        })}
      </div>
    </>
  );
};
