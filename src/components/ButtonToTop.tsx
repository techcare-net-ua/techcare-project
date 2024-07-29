'use client';

import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { CircleArrowUp } from 'lucide-react';

import { cn } from '@/helpers';

export const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 160) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={() =>
        scroll.scrollToTop({
          duration: 0,
          delay: 0,
          smooth: 'ease-in',
        })
      }
      className={cn(
        'fixed bottom-12 right-12 hidden transition-opacity hover:opacity-100 md:block',
        isVisible ? 'opacity-50' : 'pointer-events-none opacity-0',
      )}
      // to="top"
      // activeClass="active"
      // spy={true}
      // offset={-600}
    >
      <CircleArrowUp
        strokeWidth={2}
        className="h-8 w-8 lg:h-12 lg:w-12 xl:h-16 xl:w-16"
      />
    </button>
  );
};
