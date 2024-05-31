import { NavRoute, Screens } from '@/types';

export const navRoutes: NavRoute[] = [
  // { id: 'home', href: '/', title: 'Home' },
  {
    id: 'about-us',
    href: '/about-us',
    title: 'about Us',
    startScreen: Screens.MD,
  },
  {
    id: 'services',
    href: '/services',
    title: 'services',
    startScreen: Screens.MD,
  },
  {
    id: 'contacts',
    href: '/contacts',
    title: 'contacts',
    startScreen: Screens.MOBILE,
  },
];
