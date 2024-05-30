'use client';

import { ChildrenProps } from 'src/types';

import { ScreensProvider } from './ScreensProvider';
import { ThemeProvider } from './ThemeProvider';

export const ProvidersLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <ThemeProvider>
        <ScreensProvider>{children}</ScreensProvider>
      </ThemeProvider>
    </>
  );
};
