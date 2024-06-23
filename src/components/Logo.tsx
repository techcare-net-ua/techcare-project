import Link from 'next/link';

import TechCareLogo from './TechCarelogo';

type Size = {
  width?: number;
  height?: number;
};

export const Logo = ({ width = 170, height = 50 }: Size) => {
  return (
    <Link href="/">
      <TechCareLogo width={width} height={height} />
    </Link>
  );
};
