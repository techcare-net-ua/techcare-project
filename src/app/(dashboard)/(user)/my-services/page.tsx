import { Container, LogoutButton } from '@/components';

export default function Page() {
  return (
    <section>
      <Container>
        <h2 className="mt-[100px]">My services</h2>
      </Container>
      <LogoutButton />
    </section>
  );
}
