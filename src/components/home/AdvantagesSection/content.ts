import { CircleGauge, Clock8, Package, ShieldCheck } from 'lucide-react';

import { TypeLucideIcon } from '@/types';

interface BaseAdv {
  id: string;
  title: string;
  description: string;
}

interface Drops {
  id: string;
  icon: TypeLucideIcon;
  description: string;
}

const base: BaseAdv[] = [
  {
    id: '1',
    title: 'Професійний підхід',
    description:
      'Ми забезпечуємо високоякісне адміністрування серверів, системне адміністрування, технічну підтримку, гарантуючи надійність та безперебійність роботи вашого бізнесу.',
  },
  {
    id: '2',
    title: 'Індивідуальні рішення',
    description:
      'Наші послуги адаптовані під ваші потреби, забезпечуючи оптимальні технічні рішення, що відповідають специфіці вашого бізнесу та вимогам ринку.',
  },
];

const drops: Drops[] = [
  {
    id: '1',
    icon: CircleGauge,
    description: 'Допомагаємо ///швидко/// вирішити різні питання.',
  },
  {
    id: '2',
    icon: ShieldCheck,
    description: 'Гарантуємо ///безпеку/// даних та контроль доступу.',
  },
  {
    id: '3',
    icon: Clock8,
    description: '///Цінуємо/// ваш час, швидко реагуючи на запити.',
  },
  {
    id: '4',
    icon: Package,
    description: 'Надаємо комплексні ІТ-рішення та ///підтримку///.',
  },
];

export const content = {
  title: '///Покращюйте/// можливості вашого бізнесу з нами',
  base,
  drops,
};
