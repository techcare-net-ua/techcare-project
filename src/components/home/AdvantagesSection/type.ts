import { CircleGauge, Clock8, Package, ShieldCheck } from 'lucide-react';

import { TypeLucideIcon } from '@/types';

type IconMapType = {
  CircleGauge: TypeLucideIcon;
  Clock8: TypeLucideIcon;
  Package: TypeLucideIcon;
  ShieldCheck: TypeLucideIcon;
};

interface Feature {
  id: number;
  heading: string;
  text: string;
}

interface FeatureDetails {
  id: number;
  heading: string;
  icon: keyof IconMapType;
}

export interface AdvantagesSectionProps {
  data: {
    id: number;
    __component: string;
    title: string;
    feature: Feature[];
    featureDetails: FeatureDetails[];
  };
}

export const IconMap = {
  CircleGauge: CircleGauge,
  Clock8: Clock8,
  Package: Package,
  ShieldCheck: ShieldCheck,
};
