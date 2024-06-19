import { cn } from "@/helpers";

export const Separator = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'h-[1px] w-full bg-gradient-to-r from-background via-foreground to-background',
        className,
      )}
      role="separator"
    />
  );
};
