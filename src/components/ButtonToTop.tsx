'use client';

import ScrollToTop from 'react-scroll-up';

export const ButtonToTop = () => {
  return (
    <ScrollToTop showUnder={160}>
      <span>UP</span>
    </ScrollToTop>
  );
};
