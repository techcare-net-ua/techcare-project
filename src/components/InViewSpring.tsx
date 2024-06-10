'use client';
import {
  animated,
  IntersectionArgs,
  useInView,
  UseSpringProps,
} from '@react-spring/web';

const defaultConfig: UseSpringProps = {
  from: {
    opacity: 0,
    scale: 0.9,
  },
  to: {
    opacity: 1,
    scale: 1,
  },
};

const defaultIntersectionConfig: IntersectionArgs = {
  rootMargin: '-100px',
};

interface AnimateProps extends React.HTMLAttributes<HTMLElement> {
  springProps?: UseSpringProps;
  springIntersectionArgs?: IntersectionArgs;
  as?: 'div' | 'span' | 'section' | 'li' | 'p';
}

export const InViewSpring = ({
  springProps = {},
  springIntersectionArgs = {},
  as = 'div',
  children,
  ...props
}: AnimateProps) => {
  const [ref, springs] = useInView(
    () => ({ ...defaultConfig, ...springProps }),
    { ...defaultIntersectionConfig, ...springIntersectionArgs },
  );

  switch (as) {
    case 'span':
      return (
        <animated.span ref={ref} style={{ ...springs }} {...props}>
          {children}
        </animated.span>
      );
    case 'section':
      return (
        <animated.section ref={ref} style={{ ...springs }} {...props}>
          {children}
        </animated.section>
      );
    case 'li':
      return (
        <animated.li ref={ref} style={{ ...springs }} {...props}>
          {children}
        </animated.li>
      );
    case 'p':
      return (
        <animated.p ref={ref} style={{ ...springs }} {...props}>
          {children}
        </animated.p>
      );

    default:
      return (
        <animated.div ref={ref} style={{ ...springs }} {...props}>
          {children}
        </animated.div>
      );
  }
};
