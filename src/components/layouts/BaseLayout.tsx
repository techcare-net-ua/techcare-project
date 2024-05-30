import { Footer, Header, Main } from '@/components';
import { ChildrenProps } from '@/types';

export const BaseLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="grid min-h-screen grid-cols-base-layout grid-rows-base-layout grid-areas-base-layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
