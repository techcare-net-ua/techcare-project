import { Logo, Navigation } from '@/components';
import { Button } from '@/ui/button';

import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  return (
    <header className="grid-in-header border border-b-border">
      <div className="container flex gap-4 justify-between items-center py-2">
        <Logo />

        <div className="flex gap-4 items-center">
          <Navigation />
          <Button size="default">Sign in</Button>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
