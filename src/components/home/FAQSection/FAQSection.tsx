import { Container } from '@/components/Container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from './content';

export const FAQSection = () => {
  const splitArray = <T,>(arr: T[]): [T[], T[]] => {
    const mid = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, mid);
    const secondHalf = arr.slice(mid);
    return [firstHalf, secondHalf];
  };

  const [firstHalf, secondHalf] = splitArray(FAQData);

  return (
    <section>
      <Container>
        <h2>Найчастіші запитання:</h2>
        <div>
          {firstHalf.map(({ id, title, description }) => (
            <Accordion key={id} type="single" collapsible className="w-full">
              <AccordionItem value={id}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
          {secondHalf.map(({ id, title, description }) => (
            <Accordion key={id} type="single" collapsible className="w-full">
              <AccordionItem value={id}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  );
};
