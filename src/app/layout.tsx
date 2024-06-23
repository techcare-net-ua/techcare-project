import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import { cn } from '@/helpers';
import { ProvidersLayout } from '@/providers';
import { PropsChildren } from '@/types';

import './globals.css';

const inter = Raleway({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Techcare',
  description: 'Description...',
};

export default function RootLayout({ children }: PropsChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ProvidersLayout>{children}</ProvidersLayout>
      </body>
    </html>
  );
}
