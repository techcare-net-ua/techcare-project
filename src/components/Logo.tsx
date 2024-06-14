import Link from 'next/link';

import TechCarelogo from './TechCarelogo';

export const Logo = () => {
  return (
    <Link href="/" className="font-semibold uppercase">
      {/* <span className="text-foreground">Tech</span>
      <span className="text-primary">Care</span> */}
      <TechCarelogo />
    </Link>
  );
};
