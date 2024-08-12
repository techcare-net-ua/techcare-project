import { Container } from '@/components';

export const HeroSection = () => {
  return (
    <section className='relative'>
      <div className='blur-2xl absolute left-2/4 -translate-x-2/4 top-0 h-full w-full bg-primary-bg dark:bg-gradient-to-br dark:from-primary-bg dark:to-primary'></div>
      <Container>
        <div className="p-6 pt-36 pb-10 text-center">
          <h1 className="text-primary opacity-90 md:text-5xl xl:text-7xl xl:font-bold dark:text-foreground">
            Contact Us
          </h1>
          <p className="text-secondary-foreground xl:text-xl dark:text-foreground mt-8">
            We are glad to help you!
          </p>
        </div>
      </Container>
    </section>
  );
};
