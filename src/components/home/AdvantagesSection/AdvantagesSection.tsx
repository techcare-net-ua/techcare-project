import DOMPurify from 'isomorphic-dompurify';

import { Container, InViewSpring, Separator } from '@/components';

import { AdvantagesSectionProps, IconMap } from './content';

const convertToB = (text: string): string =>
  text.replace(/\/\/\/(.*?)\/\/\//, '<b>$1</b>');

export const AdvantagesSection = ({
  data,
}: Readonly<AdvantagesSectionProps>) => {
  const { title, feature, featureDetails } = data;

  return (
    <section id="AdvantagesSection">
      <Container className="relative space-y-8 pb-8 pt-8">
        <h2
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(convertToB(title)),
          }}
          className="text-center text-3xl font-semibold [&_b]:bg-gradient-to-l [&_b]:from-primary [&_b]:to-primary_add [&_b]:bg-clip-text [&_b]:not-italic [&_b]:text-transparent"
        />
        <Separator />

        <InViewSpring className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {feature?.map(({ id, heading, text }) => (
            <div
              key={id}
              className="rounded-lg bg-primary-bg p-6 dark:bg-gradient-to-br dark:from-primary-bg dark:to-primary"
            >
              <h2 className="text-xl font-semibold">{heading}</h2>
              <p className="[] mt-2">{text}</p>
            </div>
          ))}
        </InViewSpring>
        <InViewSpring className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {featureDetails.map(({ id, heading, icon }) => {
            const Icon = IconMap[icon];
            return (
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
                    __html: DOMPurify.sanitize(convertToB(heading)),
                  }}
                />
              </div>
            );
          })}
        </InViewSpring>
      </Container>
    </section>
  );
};
