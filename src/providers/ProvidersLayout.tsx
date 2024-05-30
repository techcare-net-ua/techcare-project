'use client';

import { ChildrenProps } from 'src/types';

import { ThemeProvider } from './ThemeProvider';

export const ProvidersLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};
