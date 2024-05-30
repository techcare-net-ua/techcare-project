import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="uppercase font-semibold">
      <span className="text-foreground">Tech</span>
      <span className="text-primary">Care</span>
    </Link>
  );
};
