import Link from 'next/link';

import TechCarelogo from './TechCarelogo';

export const Logo = () => {
  return (
    <Link href="/" className="font-semibold uppercase">
      <TechCarelogo />
    </Link>
  );
};
