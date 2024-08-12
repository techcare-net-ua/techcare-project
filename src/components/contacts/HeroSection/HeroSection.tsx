import { Container } from '@/components';

export const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="bg-primary-bg p-6 pt-36 text-center dark:bg-gradient-to-br dark:from-primary-bg dark:to-primary">
          <h1 className="text-primary opacity-90 md:text-5xl xl:text-7xl xl:font-bold dark:text-foreground">
            Contact Us
          </h1>
          <p className="text-secondary-foreground xl:text-xl dark:text-foreground">
            We are glad to help you!
          </p>
        </div>
      </Container>
    </section>
  );
};
