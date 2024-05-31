'use client';

import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navRoutes } from '@/configs';
import { cn } from '@/helpers';
import { Screens } from '@/types';
import * as nav from '@/ui/navigation-menu';

const getDisplayClasses = (screen: Screens) =>
  cn({
    ['block']: screen === Screens.MOBILE,
    ['hidden sm:block']: screen === Screens.SM,
    ['hidden md:block']: screen === Screens.MD,
    ['hidden lg:block']: screen === Screens.LG,
    ['hidden xl:block']: screen === Screens.XL,
  });

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav.NavigationMenu>
      <nav.NavigationMenuList>
        {navRoutes.map(({ id, href, title, startScreen }) => {
          const isActive = pathname.startsWith(href);
          return (
            <nav.NavigationMenuItem
              key={id}
              className={getDisplayClasses(startScreen)}
            >
              <Link href={href} legacyBehavior passHref>
                <nav.NavigationMenuLink
                  className={clsx(
                    nav.navigationMenuTriggerStyle(),
                    'capitalize after:transition-opacity after:opacity-0',
                    isActive &&
                      "relative text-primary focus:text-primary focus:bg-transparent after:content-[''] after:rounded after:absolute after:bottom-0 after:w-full after:h-[0.125rem] after:bg-foreground after:opacity-100",
                  )}
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
