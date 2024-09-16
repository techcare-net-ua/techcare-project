import { ReactNode } from 'react';

import { cn } from '@/helpers';

export const CardForContacts = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'rounded-lg bg-primary-bg p-6 text-secondary-foreground dark:bg-gradient-to-br dark:from-primary-bg dark:to-primary dark:text-foreground',
        className,
      )}
    >
      {children}
    </div>
  );
};
