export const dummyHasher = (str: string) =>
  str
    .split('')
    .map((el) => el.charCodeAt(0))
    .join('');
