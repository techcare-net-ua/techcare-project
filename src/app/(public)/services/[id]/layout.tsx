import { PropsChildren } from '@/types';

export default function Layout({ children }: PropsChildren) {
  return (
    <div className="__test">
      <h1>Service id layout</h1>
      {children}
    </div>
  );
}
