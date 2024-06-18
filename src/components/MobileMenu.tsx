'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

import * as sheet from '@/components/ui/sheet';

import { MobileNav } from './MobileNav';
import { ThemeSwitcher } from './ThemeSwitcher';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <sheet.Sheet open={open} onOpenChange={setOpen}>
        <sheet.SheetTrigger className="block md:hidden">
          <Menu strokeWidth={1} />
          <span className="sr-only">Toggle mobile menu</span>
        </sheet.SheetTrigger>
        <sheet.SheetContent side={'top'} className='flex flex-col gap-6'>
          <MobileNav pathname={pathname} closeMenu={() => setOpen(false)} />
            <div className='border border-solid border-border sm:hidden'></div>
          <sheet.SheetFooter className="sm:hidden items-center">
              <ThemeSwitcher />
          </sheet.SheetFooter>
        </sheet.SheetContent>
      </sheet.Sheet>
    </>
  );
};
