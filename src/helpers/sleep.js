export const sleep = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms);
};
