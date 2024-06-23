import { Footer, Header, SideBar } from '@/components';
import { PropsChildren } from '@/types';

export default function Layout({ children }: PropsChildren) {
  return (
    <div className="grid h-dvh grid-cols-base-layout grid-rows-base-layout grid-areas-base-layout">
      <Header />
      <div className="container grid h-full grid-cols-dashboard grid-rows-dashboard overflow-hidden px-0 grid-areas-dashboard">
        <SideBar />
        <main className="grid-in-sections">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
