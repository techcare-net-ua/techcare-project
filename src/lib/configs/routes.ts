import { NavRoute, Screens } from '@/types';

class Pathname {
  static join = (...segments: string[]) => `/${segments.join('/')}`;
  static getRoute = (...segments: string[]) => {
    const PATH = this.join(...segments);
    const SEGMENT = segments.slice(segments.length - 1)[0];

    return { PATH, SEGMENT };
  };
}

export const ROUTES = {
  HOME: Pathname.getRoute(''),
  ABOUT_US: Pathname.getRoute('about-us'),
  SERVICES: Pathname.getRoute('services'),
  CONTACTS: Pathname.getRoute('contacts'),
};

export const navRoutes: NavRoute[] = [
  // { id: 'home', href: '/', title: 'Home' },
  {
    id: ROUTES.ABOUT_US.SEGMENT,
    href: ROUTES.ABOUT_US.PATH,
    title: 'About Us',
    startScreen: Screens.MD,
  },
  {
    id: ROUTES.SERVICES.SEGMENT,
    href: ROUTES.SERVICES.PATH,
    title: 'Services',
    startScreen: Screens.MD,
  },
  {
    id: ROUTES.CONTACTS.SEGMENT,
    href: ROUTES.CONTACTS.PATH,
    title: 'Contacts',
    startScreen: Screens.SM,
  },
];
