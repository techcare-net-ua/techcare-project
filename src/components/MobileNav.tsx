import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as nav from '@/components/ui/navigation-menu';
import { navRoutes } from '@/configs';
import { Screens } from '@/types';

const homeOptions = {
  id: 'home',
  href: '/',
  title: 'Home',
  startScreen: Screens.MD,
};

interface IProps {
  closeMenu: () => void;
}

export const MobileNav = ({ closeMenu }: IProps) => {
  const pathname = usePathname();
  const isActive = (src: string) => pathname.endsWith(src);

  return (
    <nav.NavigationMenu className="max-w-none grow-0">
      <nav.NavigationMenuList className="flex-col items-start space-x-0">
        {[homeOptions, ...navRoutes].map(({ id, href, title }) => {
          return (
            <nav.NavigationMenuItem
              key={id}
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
