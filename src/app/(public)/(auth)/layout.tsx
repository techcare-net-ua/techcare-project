import { PropsChildren } from '@/types';

export default function Layout({ children }: PropsChildren) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {children}
    </div>
  );
}
