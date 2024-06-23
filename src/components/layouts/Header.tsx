import Link from 'next/link';

import { Logo, Navigation } from '@/components';
import { Button } from '@/components/ui/button';

import { MobileMenu } from '../MobileMenu';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-b-border bg-background/90  shadow-md backdrop-blur-sm grid-in-header">
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
