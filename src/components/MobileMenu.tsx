'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';

import { Separator } from '@/components';
import * as sheet from '@/components/ui/sheet';

import { MobileNav } from './MobileNav';
import { ThemeSwitcher } from './ThemeSwitcher';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <sheet.Sheet open={open} onOpenChange={setOpen}>
        <sheet.SheetTrigger className="block md:hidden">
          <Menu strokeWidth={1} />
          <span className="sr-only">Toggle mobile menu</span>
        </sheet.SheetTrigger>
        <sheet.SheetContent side={'top'} className="flex flex-col gap-6">
          <MobileNav closeMenu={() => setOpen(false)} />
          <Separator />
          <sheet.SheetFooter className="items-center sm:justify-center">
            <ThemeSwitcher />
          </sheet.SheetFooter>
        </sheet.SheetContent>
      </sheet.Sheet>
    </>
  );
};
