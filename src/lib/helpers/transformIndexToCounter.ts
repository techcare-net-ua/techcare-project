export const transformIndexToCounter = (index: number): string =>
  `#${(index + 1).toString().padStart(2, '0')}`;
