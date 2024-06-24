'use client';

import { animateScroll as scroll, Button } from 'react-scroll';
import { CircleArrowUp } from 'lucide-react';

export const ButtonToTop = () => {
  return (
    <Button
      onClick={() =>
        scroll.scrollToTop({
          duration: 0,
          delay: 0,
          smooth: 'ease-in',
        })
      }
      className="fixed bottom-12 right-12 hidden opacity-50 transition-opacity hover:opacity-100 md:block [&.active]:pointer-events-none [&.active]:opacity-0"
      to="top"
      activeClass="active"
      spy={true}
    >
      <CircleArrowUp strokeWidth={2} className="h-8 w-8" />
    </Button>
  );
};
