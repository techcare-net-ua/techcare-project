'use client';
import { Menu } from 'lucide-react';
import { useScreens } from 'src/providers/ScreensProvider';

import { Logo, Navigation } from '@/components';
import { Button } from '@/ui/button';

import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  const { mobile } = useScreens();
  return (
    <header className="grid-in-header border border-b-border">
      <div className="container flex gap-4 justify-between items-center py-2">
        <Logo />

        <div className="flex gap-4 items-center">
          {!mobile && <Navigation />}
          <Button size="default">Sign in</Button>
          <ThemeSwitcher />
          {mobile && (
            <Button variant="outline" size="icon">
              <Menu strokeWidth={1} />
              <span className="sr-only">Toggle mobile menu</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
