'use client';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/helpers';

const Loader = ({ text }: { readonly text: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      <p>{text}</p>
    </div>
  );
};

interface SubmitButtonProps {
  text: string;
  loadingText: string;
  className?: string;
  loading?: boolean;
}

export const SubmitButton = ({
  text,
  loadingText,
  loading,
  className,
}: Readonly<SubmitButtonProps>) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-disabled={pending || loading}
      disabled={pending || loading}
      className={cn(className)}
    >
      {pending || loading ? <Loader text={loadingText} /> : text}
    </Button>
  );
};
