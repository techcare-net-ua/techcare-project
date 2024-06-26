export interface Tariff {
  id: number;
  badge: string;
  isFree: boolean;
  price?: number;
  forWhat: string;
  note: string;
  description: { item: string }[];
}

export const tariffsData: Tariff[] = [
  {
    id: 1,
    badge: 'badge',
    isFree: false,
    price: 449,
    forWhat: 'Manage and pay international contractors',
    note: '*No commitments. Cancel anytime.',
    description: [
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
    ],
  },
  {
    id: 2,
    badge: 'badge2',
    isFree: true,
    forWhat: 'Manage and pay international contractors',
    note: '*No commitments. Cancel anytime.',
    description: [
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
    ],
  },
  {
    id: 3,
    badge: 'badge3',
    isFree: true,
    forWhat: 'Manage and pay international contractors',
    note: '*No commitments. Cancel anytime.',
    description: [
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
    ],
  },
  {
    id: 4,
    badge: 'badge4',
    isFree: true,
    forWhat: 'Manage and pay international contractors',
    note: '*No commitments. Cancel anytime.',
    description: [
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
    ],
  },
  {
    id: 5,
    badge: 'badge5',
    isFree: true,
    forWhat: 'Manage and pay international contractors',
    note: '*No commitments. Cancel anytime.',
    description: [
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
      {
        item: 'Onboard international contractors quickly and compliantly with localized contracts.',
      },
    ],
  },
];
