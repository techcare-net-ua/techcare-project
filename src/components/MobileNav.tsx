import clsx from 'clsx';
import Link from 'next/link';

import * as nav from '@/components/ui/navigation-menu';
import { navRoutes } from '@/configs';
import { cn } from '@/helpers';
import { Screens } from '@/types';

const homeOptions = {
  id: 'home',
  href: '/',
  title: 'Home',
  startScreen: Screens.MD,
};

const getDisplayClasses = (screen: Screens) =>
  cn({
    ['block sm:hidden']: screen === Screens.SM,
    ['block md:hidden']: screen === Screens.MD,
  });

interface IProps {
  pathname: string;
  closeMenu: () => void;
}

export const MobileNav = ({ pathname, closeMenu }: IProps) => {
  const isActive = (src: string) => pathname.endsWith(src);

  return (
    <nav.NavigationMenu className="max-w-none grow-0">
      <nav.NavigationMenuList className="flex-col items-start space-x-0">
        {[homeOptions, ...navRoutes].map(({ id, href, title, startScreen }) => {
          return (
            <nav.NavigationMenuItem
              key={id}
              className={getDisplayClasses(startScreen)}
            >
              <Link href={href} legacyBehavior passHref>
                <nav.NavigationMenuLink
                  className={clsx(
                    nav.navigationMenuTriggerStyle(),
                    'capitalize after:opacity-0 after:transition-opacity',
                    isActive(href) &&
                      'relative text-primary focus:bg-transparent focus:text-primary',
                  )}
                  onClick={closeMenu}
                >
                  {title}
                </nav.NavigationMenuLink>
              </Link>
            </nav.NavigationMenuItem>
          );
        })}
      </nav.NavigationMenuList>
    </nav.NavigationMenu>
  );
};
