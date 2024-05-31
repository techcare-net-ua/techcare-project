import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="font-semibold uppercase">
      <span className="text-foreground">Tech</span>
      <span className="text-primary">Care</span>
    </Link>
  );
};
