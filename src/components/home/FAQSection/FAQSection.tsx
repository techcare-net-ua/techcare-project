'use client';
import { useEffect, useState } from 'react';

import { Container } from '@/components/Container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from './content';

export const FAQSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const splitArray = <T,>(arr: T[]): [T[], T[]] => {
    const mid = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, mid);
    const secondHalf = arr.slice(mid);
    return [firstHalf, secondHalf];
  };

  const [firstHalf, secondHalf] = splitArray(FAQData);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 975);

    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  return (
    <section>
      <Container className="space-y-0 pb-8 pt-0">
        <h2 className="pb-4 text-center uppercase lg:pb-8">
          Найчастіші запитання:
        </h2>
        <div className="h-[1px] w-full bg-gradient-to-r from-background via-foreground to-background"></div>
        <div className="pt-4 lg:grid lg:grid-cols-2 lg:gap-3 lg:pt-8">
          <div>
            {firstHalf.map(({ id, title, description }) => (
              <Accordion key={id} type="single" collapsible className="w-full">
                <AccordionItem className="mb-3 border" value={id}>
                  <AccordionTrigger className="min-h-[100px] gap-2 px-4 text-left hover:text-primary">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div>
            {isLargeScreen &&
              secondHalf.map(({ id, title, description }) => (
                <Accordion
                  key={id}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem className="mb-3 border" value={id}>
                    <AccordionTrigger className="min-h-[100px] gap-2 px-4 text-left hover:text-primary">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      {description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
