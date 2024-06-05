'use client';

import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import * as nav from '@/components/ui/navigation-menu';
import { navRoutes } from '@/configs';
import { cn } from '@/helpers';
import { Screens } from '@/types';

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
                    'capitalize after:opacity-0 after:transition-opacity',
                    isActive &&
                      "relative text-primary after:absolute after:bottom-0 after:h-[0.125rem] after:w-full after:rounded after:bg-foreground after:opacity-100 after:content-[''] focus:bg-transparent focus:text-primary",
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
