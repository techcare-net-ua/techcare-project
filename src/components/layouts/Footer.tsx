import Link from 'next/link';

import { FormForEmail, Logo, YearLabel } from '@/components';
import { Container } from '@/components';

export const Footer = () => {
  return (
    <footer className="border-t border-border grid-in-footer">
      <div className="bg-secondary">
        <Container>
          <Logo height={50} width={150} />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            deserunt cumque, libero unde facilis mollitia
          </p>
          <div>
            <Link href="/">Наші послуги</Link>
            <Link href="/">Наші переваги</Link>
            <Link href="/">Найчастіші запитання</Link>
          </div>
          <div>
            <Link href="/">Про нас</Link>
            <Link href="/">Послуги</Link>
            <Link href="/">Контакти</Link>
          </div>

          <FormForEmail />
          <div className="h-[1px] w-full bg-gradient-to-r from-secondary via-foreground to-secondary"></div>
          <small className="block text-center text-muted-foreground">
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
            <span>Techcare</span>
            <YearLabel />
          </small>
        </Container>
      </div>
    </footer>
  );
};
