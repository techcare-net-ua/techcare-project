import { Screens } from '@/types';

export interface NavRoute {
  id: string;
  href: string;
  title: string;
  startScreen: Screens;
  children?: NavRoute[];
}
