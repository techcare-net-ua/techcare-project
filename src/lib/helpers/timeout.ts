export const timeout = async (
  ms: number = 3000,
  result: 'success' | 'error' = 'success',
): Promise<'success'> => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      return result === 'success'
        ? res('success')
        : rej(new Error('OOPS timeout function error'));
    }, ms),
  );
};
