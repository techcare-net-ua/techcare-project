'use client';
import {
  animated,
  useInView,
  // useIsomorphicLayoutEffect,
  // useSpring,
} from '@react-spring/web';

interface PropsSpring extends React.HTMLAttributes<HTMLDivElement> {}

export const SpringExample = ({ children, ...props }: PropsSpring) => {
  console.log('test Spring');

  // const [springs, api] = useSpring(
  //   () => ({
  //     opacity: 0,
  //   }),
  //   [],
  // );

  // useIsomorphicLayoutEffect(() => {
  //   api.start({
  //     from: {
  //       opacity: 0,
  //     },
  //     to: {
  //       opacity: 1,
  //     },
  //   });
  // }, []);

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        scale: 0.9,
      },
      to: {
        opacity: 1,
        scale: 1,
      },
    }),
    {
      rootMargin: '-100px',
    },
  );

  return (
    <animated.div ref={ref} style={{ ...springs }} {...props}>
      {children}
    </animated.div>
  );
};
