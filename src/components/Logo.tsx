import Link from 'next/link';

import TechCarelogo from './TechCarelogo';

type Size = {
  width?: number;
  height?: number;
};

export const Logo = ({ width = 170, height = 50 }: Size) => {
  return (
    <Link href="/">
      <TechCarelogo width={width} height={height} />
    </Link>
  );
};
