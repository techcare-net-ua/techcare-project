import { cn } from '@/helpers';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: 'block' | 'single-col-grid' | 'flex-row';
  pxDisable?: boolean;
}

export const Container = ({
  children,
  type = 'block',
  pxDisable = false,
  style,
  className,
}: ContainerProps) => {
  return (
    <div
      style={style}
      className={cn(
        'container relative space-y-4 py-4',
        pxDisable && 'px-0',
        type === 'single-col-grid' && 'grid',
        type === 'flex-row' && 'flex flex-wrap gap-4 space-x-0 space-y-0',
        className,
      )}
    >
      {children}
    </div>
  );
};
