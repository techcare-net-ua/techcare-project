import Link from 'next/link';

import { FormForEmail, Logo, Separator, YearLabel } from '@/components';
import { Container } from '@/components';

export const Footer = () => {
  return (
    <footer className="border-t border-border grid-in-footer">
      <div className="bg-secondary">
        <Container className="gap-4 md:grid md:grid-cols-3 md:space-y-0 md:pt-8 lg:pt-10 lg:md:grid-cols-4 xl:pt-20">
          <div className="lg:mb-10 xl:mb-20">
            <Logo />
            <p className="text-center md:mt-4 md:max-w-[300px] md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              deserunt cumque, libero unde facilis mollitia
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 align-top md:gap-4 md:pt-4">
            <Link className="hover:text-primary" href="/about-us">
              Про нас
            </Link>
            <Link className="hover:text-primary" href="/services">
              Послуги
            </Link>
            <Link className="hover:text-primary" href="/contacts">
              Контакти
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 align-top md:items-start md:gap-4 md:pt-4 lg:justify-start">
            <Link className="hover:text-primary" href="/#AdvantagesSection">
              Наші переваги
            </Link>
            <Link className="hover:text-primary" href="/#ServicesSection">
              Наші послуги
            </Link>
            <Link className="hover:text-primary" href="/#TariffsSection">
              Тарифні пакети
            </Link>
            <Link className="hover:text-primary" href="/#FAQSection">
              Найчастіші запитання
            </Link>
          </div>
          <div className="md:col-span-3 md:flex md:justify-center lg:col-span-1 lg:justify-start">
            <FormForEmail className=" md:w-2/4 lg:w-full lg:min-w-[200px] lg:pt-4 " />
          </div>
          <Separator className="from-transparent to-transparent md:col-span-3 lg:col-span-4" />
          <small className="flex justify-center gap-4 text-muted-foreground md:col-span-3 lg:col-span-4">
            <Link className="hover:text-card-foreground" href="/">
              Terms of Service
            </Link>
            <Link className="hover:text-card-foreground" href="/">
              Privacy Policy
            </Link>
            <div>
              <span>Techcare</span>
              <YearLabel />
            </div>
          </small>
        </Container>
      </div>
    </footer>
  );
};
