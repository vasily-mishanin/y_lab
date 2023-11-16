export const dummyHasher = (str: string) =>
  str
    .split('')
    .map((el) => el.charCodeAt(0))
    .join('');

export const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
