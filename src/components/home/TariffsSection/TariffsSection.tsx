import { Container, InViewSpring, Separator } from '@/components';
import { CarouselItem } from '@/components/ui/carousel';

import { content } from './content';
import { Slider } from './Slider';
import { TariffCard } from './TariffCard';

export const TariffsSection = () => {
  return (
    <Container className="relative space-y-8 pb-8 pt-8">
      <h2 className="text-center">{content.title}</h2>
      <Separator />
      <InViewSpring>
        <Slider>
          {content.tariffsData.map(data => (
            <CarouselItem
              key={data.id}
              className="basis-5/6 md:basis-1/2 lg:basis-2/5  xl:basis-1/3 " // pl-6
            >
              <TariffCard data={data} className="mx-auto my-0" />
            </CarouselItem>
          ))}
        </Slider>
      </InViewSpring>
    </Container>
  );
};
