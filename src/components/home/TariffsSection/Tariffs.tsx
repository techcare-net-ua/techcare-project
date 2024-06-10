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
      <Carousel>
        <CarouselContent>
          {dataForTariffs.map(data => (
            <CarouselItem key={data.id}>
              <CardForTariff data={data} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
};
