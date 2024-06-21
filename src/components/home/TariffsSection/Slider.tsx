'use client';

import { FC, useState } from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { DotButton, useDotButton } from '@/components/ui/carousel-dot-buttons';
import { cn } from '@/helpers';
import { screens } from '@/styles';
import { PropsChildren } from '@/types';

export const Slider: FC<PropsChildren> = ({ children }) => {
  const [api, setApi] = useState<CarouselApi>();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="w-[calc(100vw_-_2rem)] sm:w-full"
        opts={{
          align: 'center',
          loop: true,
          breakpoints: {
            [`(min-width: ${screens.xl})`]: { loop: false },
            // [`(min-width: ${screens.xl})`]: { active: false },
          },
        }}
      >
        <CarouselContent>{children}</CarouselContent>
        <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-full w-full  sm:block">
          <CarouselPrevious className="pointer-events-auto left-0 h-full w-8 -translate-y-1/2 rounded-none border-none bg-background/20 hover:bg-background/40" />
          <CarouselNext className="pointer-events-auto right-0 h-full w-8 -translate-y-1/2 rounded-none border-none bg-background/20 hover:bg-background/60" />
        </div>
      </Carousel>
      <div className="mt-4 flex justify-center gap-2">
        {scrollSnaps.map((_, index) => {
          return (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                'h-2 w-8 rounded-full bg-secondary',
                index === selectedIndex && 'bg-accent-foreground',
              )}
            />
          );
        })}
      </div>
    </>
  );
};
