'use client';

import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

export const MyComponent = () => {
  const segment = useSelectedLayoutSegment();
  console.log('segment', segment);
  const segments = useSelectedLayoutSegments();
  console.log('segments', segments);
  return <></>;
};
