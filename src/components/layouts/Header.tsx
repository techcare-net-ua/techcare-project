import { Menu } from 'lucide-react';
import Link from 'next/link';

import { Logo, Navigation } from '@/components';
import { Button } from '@/ui/button';

import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  return (
    <header className="border-b border-b-border grid-in-header">
      <div className="__test container flex items-center justify-between gap-4 py-2">
        <Logo />

        <div className="flex items-center gap-4">
          <Navigation />
          <Button variant="outline" size="icon">
            <Menu strokeWidth={1} />
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
          <ThemeSwitcher />
          <Button size="default" asChild>
            <Link href="/profile">Sign in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
