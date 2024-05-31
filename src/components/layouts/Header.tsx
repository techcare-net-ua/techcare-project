import { Menu } from 'lucide-react';

import { Logo, Navigation } from '@/components';
import { Button } from '@/ui/button';

import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  return (
    <header className="grid-in-header border-b border-b-border">
      <div className="container flex gap-4 justify-between items-center py-2">
        <Logo />

        <div className="flex gap-4 items-center">
          <Navigation />
          <Button variant="outline" size="icon">
            <Menu strokeWidth={1} />
            <span className="sr-only">Toggle mobile menu</span>
          </Button>
          <ThemeSwitcher />
          <Button size="default">Sign in</Button>
        </div>
      </div>
    </header>
  );
};
