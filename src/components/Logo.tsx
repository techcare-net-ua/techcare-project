import Link from 'next/link';

import TechCarelogo from './TechCarelogo';

type Size = {
  width: number;
  height: number;
};

export const Logo = ({ width, height }: Size) => {
  return (
    <Link href="/">
      <TechCarelogo width={width} height={height} />
    </Link>
  );
};
