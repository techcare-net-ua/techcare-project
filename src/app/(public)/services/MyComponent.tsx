'use client';

import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

export const MyComponent = () => {
  const serment = useSelectedLayoutSegment();
  console.log('serment', serment);
  const serments = useSelectedLayoutSegments();
  console.log('serments', serments);
  return <></>;
};
