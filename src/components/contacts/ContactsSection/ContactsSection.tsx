import { Phone } from 'lucide-react';

import { Container } from '@/components/Container';
import { TelegramIcon } from '@/components/icons';

export const ContactsSection = () => {
  return (
    <section>
      <Container>
        <div className="rounded-lg bg-primary-bg p-6 dark:bg-gradient-to-br dark:from-primary-bg dark:to-primary">
          <a href="tel:+380673667552" className="flex items-center gap-2">
            <Phone size={15} strokeWidth={0} fill="currentColor" />{' '}
            <p>38 (067) 366 75 52</p>
          </a>
          <ul>
            <li>
              <a href="">
                <TelegramIcon />
              </a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
          </ul>
          <p>Text</p>
        </div>
      </Container>
    </section>
  );
};
