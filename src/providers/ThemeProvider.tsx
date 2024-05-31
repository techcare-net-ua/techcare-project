'use client';

import * as React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
// import { ThemeProviderProps } from 'next-themes/dist/types';
import { PropsChildren } from 'src/types';

export const ThemeProvider = ({ children }: PropsChildren) => {
  return (
    <>
      <NextThemeProvider
        attribute="class"
        storageKey="theme-mode"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange // Optionally disable all CSS transitions when switching themes
      >
        {children}
      </NextThemeProvider>
    </>
  );
};
