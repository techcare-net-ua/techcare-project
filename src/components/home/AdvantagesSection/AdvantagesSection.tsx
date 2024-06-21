import DOMPurify from 'isomorphic-dompurify';

import { Container, Separator } from '@/components';

import { content } from './content';

const convertToB = (text: string): string =>
  text.replace(/\/\/\/(.*?)\/\/\//, '<b>$1</b>');

export const AdvantagesSection = () => {
  return (
    <section>
      <Container className="relative space-y-8 pb-8 pt-8">
        <h2
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(convertToB(content.title)),
          }}
          className="text-center text-3xl font-semibold [&_b]:bg-gradient-to-l [&_b]:from-primary [&_b]:to-primary_add [&_b]:bg-clip-text [&_b]:not-italic [&_b]:text-transparent"
        />
        <Separator />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {content.base.map(({ id, description, title }) => (
            <div
              key={id}
              className="rounded-lg bg-primary-bg p-6 dark:bg-gradient-to-br dark:from-primary-bg dark:to-primary"
            >
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="[] mt-2">{description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {content.drops.map(({ id, description, icon: Icon }) => (
            <div
              key={id}
              className="rounded-lg bg-secondary p-6 text-center md:text-left"
            >
              <Icon
                size={40}
                strokeWidth={1}
                className="mx-auto mb-4 md:mx-0"
              />
              <p
                className="[&_b]:font-semibold"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(convertToB(description)),
                }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
