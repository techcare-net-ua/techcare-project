import { Container } from '@/components';
import { PropsChildren } from '@/types';

import { MyComponent } from './MyComponent';

export default function Layout({ children }: PropsChildren) {
  return (
    <div>
      <MyComponent />
      <Container>Root services layout</Container>
      {children}
    </div>
  );
}
