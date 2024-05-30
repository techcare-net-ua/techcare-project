'use client';

import * as React from 'react';
import Link from 'next/link';

import * as nav from '@/ui/navigation-menu';

export const Navigation = () => {
  return (
    <nav.NavigationMenu>
      <nav.NavigationMenuList>
        <nav.NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <nav.NavigationMenuLink
              className={nav.navigationMenuTriggerStyle()}
            >
              About Us
            </nav.NavigationMenuLink>
          </Link>
        </nav.NavigationMenuItem>

        <nav.NavigationMenuItem>
          <Link href="/contacts" legacyBehavior passHref>
            <nav.NavigationMenuLink
              className={nav.navigationMenuTriggerStyle()}
            >
              Contacts
            </nav.NavigationMenuLink>
          </Link>
        </nav.NavigationMenuItem>
      </nav.NavigationMenuList>
    </nav.NavigationMenu>
  );
};
