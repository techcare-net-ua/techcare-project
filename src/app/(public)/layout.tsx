import { ButtonToTop,Footer, Header } from '@/components';
import { PropsChildren } from '@/types';

export default function Layout({ children }: PropsChildren) {
  return (
    <div className="grid min-h-screen grid-cols-base-layout grid-rows-base-layout grid-areas-base-layout">
      <Header />
      <main className="grid-in-main">{children}</main>
      <Footer />
      <ButtonToTop />
    </div>
  );
}
