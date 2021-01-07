const arr = [4, 20, 36, 20, 20];

const sum = (a) => {
  const [head, ...tail] = a;
  return a.length === 0 ? 0 : head + sum(tail);
};

console.log(sum(arr));
