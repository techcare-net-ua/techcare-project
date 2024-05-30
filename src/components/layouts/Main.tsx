import { ChildrenProps } from '@/types';

export const Main = ({ children }: ChildrenProps) => {
  return <main className="grid-in-main">{children}</main>;
};
