'use client';
import { createContext, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import { screens } from '@/styles';
import { ChildrenProps, Screens } from '@/types';

interface Context {
  screen: Screens;
  mobile: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}

export const ScreensContext = createContext<Context>({
  screen: Screens.MOBILE,
  mobile: true,
  sm: false,
  md: false,
  lg: false,
  xl: false,
});

const int = (val: string) => Number.parseInt(val);

const getScreen = ({
  mobile,
  sm,
  md,
  lg,
  xl,
}: Omit<Context, 'screen'>): Context['screen'] => {
  switch (true) {
    case mobile:
      return Screens.MOBILE;
    case sm:
      return Screens.SM;

    case md:
      return Screens.MD;

    case lg:
      return Screens.LG;

    case xl:
      return Screens.XL;

    default:
      return Screens.MOBILE;
  }
};

export const ScreensProvider = ({ children }: ChildrenProps) => {
  const mobile = useMediaQuery({
    maxWidth: int(screens.sm) - 0.02,
  });
  const sm = useMediaQuery({
    minWidth: int(screens.sm),
    maxWidth: int(screens.md) - 0.02,
  });
  const md = useMediaQuery({
    minWidth: int(screens.md),
    maxWidth: int(screens.lg) - 0.02,
  });
  const lg = useMediaQuery({
    minWidth: int(screens.lg),
    maxWidth: int(screens.xl) - 0.02,
  });
  const xl = useMediaQuery({ minWidth: screens.xl });

  const screen = getScreen({ mobile, sm, md, lg, xl });

  return (
    <ScreensContext.Provider value={{ mobile, sm, md, lg, xl, screen }}>
      {children}
    </ScreensContext.Provider>
  );
};

export const useScreens = () => useContext(ScreensContext);
