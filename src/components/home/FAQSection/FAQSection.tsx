import { Container, InViewSpring, Separator } from '@/components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { content } from './content';

const splitArray = <T,>(arr: T[]): [T[], T[]] => {
  const mid = Math.ceil(arr.length / 2);
  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid);
  return [firstHalf, secondHalf];
};

export const FAQSection = () => {
  const [firstHalf, secondHalf] = splitArray(content.FAQData);

  return (
    <section id="FAQSection">
      <Container className="space-y-0 pb-8 pt-8">
        <h2 className="pb-4 text-center lg:pb-8">{content.title}:</h2>
        <Separator />
        <InViewSpring className="pt-4 lg:grid lg:grid-cols-2 lg:gap-3 lg:pt-8">
          <div>
            {firstHalf.map(({ id, title, description }) => (
              <Accordion key={id} type="single" collapsible className="w-full">
                <AccordionItem className="mb-3 border" value={id}>
                  <AccordionTrigger className="min-h-[100px] gap-2 px-4 text-left hover:text-primary [&[data-state=open]>span]:text-primary [&[data-state=open]>svg]:stroke-primary">
                    <span>{title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="hidden lg:block">
            {secondHalf.map(({ id, title, description }) => (
              <Accordion key={id} type="single" collapsible className="w-full">
                <AccordionItem className="mb-3 border" value={id}>
                  <AccordionTrigger className="min-h-[100px] gap-2 px-4 text-left hover:text-primary [&[data-state=open]>span]:text-primary [&[data-state=open]>svg]:stroke-primary">
                    <span>{title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </InViewSpring>
      </Container>
    </section>
  );
};
