import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Container } from '@/components';
import { Button } from '@/components/ui/button';
import { cn, transformIndexToCounter } from '@/helpers';
// import { TypeLucideIcon } from '@/types';
import services_01 from '@/images/services/services_01.jpg';
import services_02 from '@/images/services/services_02.jpg';
import services_03 from '@/images/services/services_03.jpg';
import services_04 from '@/images/services/services_04.jpg';

interface DataInterface {
  id: string;
  path: string;
  // icon: TypeLucideIcon;
  title: string;
  description: string;
  points: string[];
  src: StaticImageData;
}

const data: DataInterface[] = [
  {
    id: '1',
    path: '/services',
    title: 'Адміністрування серверів',
    description:
      'Адміністрування серверів включає комплексну підтримку і управління серверною інфраструктурою для забезпечення безперебійної роботи бізнесу, адаптуючи рішення під ваші потреби.',
    points: [
      'Моніторинг та аналіз роботи серверів для своєчасного виявлення і вирішення проблем',
      'Встановлення та оновлення серверного програмного забезпечення для підтримання оптимальної продуктивності',
      'Налаштування безпеки серверів, включаючи управління доступом і захист від шкідливого програмного забезпечення',
    ],
    src: services_01,
  },
  {
    id: '2',
    path: '/services',
    title: 'Системне адміністрування',
    description:
      'Послуга забезпечує ефективне управління та підтримку всіх інформаційних технологій вашого бізнесу. Наша команда фахівців гарантує безперебійну роботу ІТ-систем, швидке вирішення проблем та оптимізацію процесів.',
    points: [
      'Встановлення та налаштування апаратного і програмного забезпечення для забезпечення стабільної роботи',
      'Управління мережевою інфраструктурою для безперебійного обміну даними між усіма підрозділами',
      'Налагодження і підтримка засобів безпеки, включаючи антивірусний захист та контроль доступу',
    ],
    src: services_02,
  },
  {
    id: '3',
    path: '/services',
    title: 'Технічна підтримка',
    description:
      'Технічна підтримка користувачів спрямована на швидке і ефективне вирішення ІТ-проблем, з якими стикаються ваші співробітники. Наші фахівці завжди готові надати допомогу, забезпечуючи безперебійну роботу.',
    points: [
      'Вирішення технічних проблем у режимі реального часу через телефон, електронну пошту або віддалений доступ',
      'Налаштування і підтримка робочих станцій, включаючи встановлення необхідного програмного забезпечення',
      'Виявлення і усунення проблем з підключенням до мережі та інтернету для забезпечення доступу до ресурсів компанії',
    ],
    src: services_03,
  },
  {
    id: '4',
    path: '/services',
    title: 'Закупівля та налаштування',
    description:
      'Послуга забезпечує оптимальний вибір і ефективне впровадження технічних рішень для вашого бізнесу. Наші експерти надають консультації щодо вибору, придбання та налаштування обладнання, що відповідає вашим потребам.',
    points: [
      'Консультації з вибору ІТ-обладнання, враховуючи специфіку вашого бізнесу і вимоги',
      'Організація та проведення процесу закупівлі, включаючи переговори з постачальниками і оцінку пропозицій',
      'Налаштування нового обладнання, включаючи встановлення програмного забезпечення і підключення до мережі',
    ],
    src: services_04,
  },
];

export const ServicesSection = () => {
  return (
    <section className="">
      <Container pxDisable className="relative space-y-8 pb-0 pt-8">
        <h2 className=" px-4 text-center uppercase">Наші послуги</h2>
        <ul className="md:space-y-1">
          {data.map(({ title, id, points, description, src }, index) => (
            <li
              key={id}
              className="group  odd:flex-row-reverse odd:bg-transparent even:text-right md:flex md:gap-1"
            >
              <div
                className={cn(
                  'hidden p-6 text-left md:flex md:w-[57%] md:flex-col md:justify-between md:gap-4',
                  index % 2 === 0 ? 'bg-secondary' : 'border bg-transparent',
                )}
              >
                <div className="space-y-4">
                  <h3
                    className={cn(
                      'from-background to-secondary px-2 py-1 font-medium uppercase tracking-wide md:text-xl lg:text-2xl',
                      index % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l',
                    )}
                  >
                    {title}
                  </h3>
                  <p>{description}</p>
                  <ul className="hidden list-disc space-y-2 pl-4 leading-7 lg:block">
                    {points.map((text, idx) => (
                      <li key={idx}>{text}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/services"
                  className="pr-4 text-right underline underline-offset-4 transition-colors hover:text-primary focus:text-primary dark:text-foreground"
                >
                  Дізнатись більше
                </Link>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden p-4 transition-colors group-hover:bg-black group-hover:bg-opacity-40 has-[a:focus]:bg-black has-[a:focus]:bg-opacity-30 sm:aspect-video md:w-[43%] lg:aspect-[4/3] xl:aspect-video">
                <div className="flex h-full flex-col justify-between">
                  <p className="-translate-y-1/2 text-4xl tracking-wide text-primary-foreground opacity-0 drop-shadow-3xl transition-all group-hover:translate-y-0 group-hover:opacity-100 dark:text-foreground">
                    {transformIndexToCounter(index)}
                  </p>
                  <div className="space-y-2 md:hidden">
                    <p className="translate-y-12 text-xl font-medium uppercase text-primary-foreground drop-shadow-3xl transition-transform group-hover:translate-y-0 dark:text-foreground">
                      {title}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="opacity-0 drop-shadow-3xl transition-all  group-hover:opacity-100 "
                    >
                      <Link href="/services" className="">
                        Дізнатись більше
                      </Link>
                    </Button>
                  </div>
                </div>
                <Image
                  src={src}
                  priority
                  className="absolute left-0 top-0 -z-10 h-full w-full translate-y-0 scale-105 object-cover object-center transition-transform group-hover:scale-100"
                  alt="Test Image"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
