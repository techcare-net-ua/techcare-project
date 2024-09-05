import Image from 'next/image';

import { getStrapiMedia } from '@/helpers';

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  quality: number;
  priority: boolean;
  className?: string;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  quality,
  priority,
}: Readonly<StrapiImageProps>) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      className={className}
      quality={quality}
      priority={priority}
    />
  );
}
