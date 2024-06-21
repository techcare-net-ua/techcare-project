import Link from 'next/link';

import { Logo, Navigation } from '@/components';
import { Button } from '@/components/ui/button';

import { MobileMenu } from '../MobileMenu';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  return (
    <>
      <header className="border-b border-b-border grid-in-header">
        <div className="__test container flex items-center justify-between gap-4 py-2">
          <Logo height={50} width={170} />

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
