'use client';

import { FC, ReactNode, useState } from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { DotButton, useDotButton } from '@/components/ui/carousel-dot-buttons';

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
      >
        <CarouselContent className="-ml-7">{children}</CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </Carousel>
      <div className="grid grid-flow-col justify-center gap-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'h-6 w-6 rounded-full border-2 border-border'.concat(
              index === selectedIndex ? ' border-accent-foreground' : '',
            )}
          />
        ))}
      </div>
    </>
  );
};
