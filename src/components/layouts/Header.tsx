import Link from 'next/link';

import { Logo, Navigation } from '@/components';
import { Button } from '@/components/ui/button';

import { MobileMenu } from '../MobileMenu';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  return (
    <>
      <header className="border-b border-b-border grid-in-header" id='top'>
        <div className="container flex items-center justify-between gap-4 py-2">
          <Logo />

          <div className="flex items-center gap-4">
            <Navigation />
            <MobileMenu />
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>
            <Button size="default" asChild>
              <Link href="/profile">Sign in</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
