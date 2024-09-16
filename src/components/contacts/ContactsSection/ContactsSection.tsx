import { Mail, Phone } from 'lucide-react';

import { Container } from '@/components/Container';
import { TelegramIcon, ViberIcon, WhatsApp } from '@/components/icons';

import { CardForContacts } from './CardForContacts';

export const ContactsSection = () => {
  return (
    <section>
      <Container>
         <div className='grid gap-2 auto-rows-fr'>
        <CardForContacts className=''>
          <div className="grid gap-6">
            <a
              href="tel:+380673667552"
              className="flex items-center justify-center gap-2"
            >
              <Phone size={15} strokeWidth={0} fill="currentColor" />
              <p className="text-xl">+38 (067) 366 75 52</p>
            </a>
            <ul className="flex items-center justify-around gap-2">
              <li>
                <a href="#" className="flex flex-col items-center gap-2">
                  <TelegramIcon />
                  <p>Telegram</p>
                </a>
              </li>
              <li>
                <a href="#" className="flex flex-col items-center gap-2">
                  <WhatsApp />
                  <p>WhatsApp</p>
                </a>
              </li>
              <li>
                <a href="#" className="flex flex-col items-center gap-2">
                  <ViberIcon />
                  <p>Viber</p>
                </a>
              </li>
            </ul>
          </div>
        </CardForContacts>
        <CardForContacts className='grid'>
          <div className="grid gap-6">
            <a
              href="tel:+380673667552"
              className="flex flex-wrap items-center justify-center gap-2"
            >
              <Mail size={20} strokeWidth={2} />
              <p className="text-xl">mail.mailmail@mail.com</p>
            </a>
          </div>
        </CardForContacts>
        </div>
      </Container>
    </section>
  );
};
