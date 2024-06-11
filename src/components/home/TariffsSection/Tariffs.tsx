import { Container } from '@/components';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { CardForTariff } from './CardForTariff';
import { dataForTariffs } from './data';

export const Tariffs = () => {
  return (
    <Container>
      <Carousel
        opts={{
          loop: false,
        }}
      >
        <CarouselContent className="-ml-7">
          {dataForTariffs.map(data => (
            <CarouselItem
              key={data.id}
              className="pl-7 basis-auto"
              // basis-1/2 md:basis-1/2 lg:basis-1/2
            >
              <CardForTariff data={data} className="mx-auto my-0" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};
