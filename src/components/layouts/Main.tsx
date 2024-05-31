import { PropsChildren } from '@/types';

export const Main = ({ children }: PropsChildren) => {
  return <main className="grid-in-main">{children}</main>;
};
