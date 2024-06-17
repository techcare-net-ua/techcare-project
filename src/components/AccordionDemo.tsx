import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type DataInterface = {
  id: string;
  title: string;
  description: string;
};

export function AccordionDemo({ id, title, description }: DataInterface) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={id}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
