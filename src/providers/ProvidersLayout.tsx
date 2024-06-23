'use client';

import { PropsChildren } from 'src/types';

// import { ScreensProvider } from './ScreensProvider';
import { ThemeProvider } from './ThemeProvider';

export const ProvidersLayout = ({ children }: PropsChildren) => {
  return (
    <>
      <ThemeProvider>
        {/* <ScreensProvider> */}
        {children}
        {/* </ScreensProvider> */}
      </ThemeProvider>
    </>
  );
};
