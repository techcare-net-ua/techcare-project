import { Container } from '@/components';
import { CarouselItem } from '@/components/ui/carousel';

import { CardForTariff } from './CardForTariff';
import { dataForTariffs } from './data';
import { Swiper } from './Swiper';

export const Tariffs = () => {
  return (
    <Container className="space-y-6">
      <Swiper>
        {dataForTariffs.map(data => (
          <CarouselItem
            key={data.id}
            className="h-fit basis-full pl-7 md:basis-auto"
            // basis-1/2 md:basis-1/2 lg:basis-1/2
          >
            <CardForTariff data={data} className="mx-auto my-0" />
          </CarouselItem>
        ))}
      </Swiper>
    </Container>
  );
};
