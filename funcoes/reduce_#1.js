const numbers = [1, 2, 3, 5, -1, 16, 25];

const sum = (acc, el) => acc + el;
const total = numbers.reduce(sum, 0);
console.log(total);

const names = ["Daniel", "BOB", "Flávia", "BOB", "Alice", "Matheus", "Alice"];
const counterNames = (allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
};

console.log(names.reduce(counterNames, {}));

const arrNumbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const reducer = arrNumbers.reduce((acc, a) => acc.concat(a));
console.log(reducer);

let newArr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const result = newArr.sort().reduce((init, current) => {
  if (init.length === 0 || init[init.length - 1] !== current)
    init.push(current);

  return init;
}, []);

console.log(newArr, result);
// Implementando função que simula o Array.reduce()

const myReduce = (arr, fn, initial) => {
  let acc = initial;
  const a = arr;
  if (initial === undefined) {
    acc = arr[0];
    a = arr.slice(1);
  }
  a.forEach((el, i, a) => {
    acc = fn(acc, el, i, a);
  });
  return acc;
};

console.log(myReduce(numbers, sum, 0));

// Implementando função recursiva que simula o Array.reduce()

const myRecursiveReduce = (arr, fn, initial) => {
  const acc = initial === undefined ? arr[0] : initial;
  const newArr = initial === undefined ? arr.slice(1) : arr;

  return (function fnInitial(accInternal, a, counter) {
    const [head, ...tail] = a;
    return a.length === 0
      ? accInternal
      : fnInitial(fn(accInternal, head, counter, a), tail, counter + 1);
  })(acc, newArr, 0);
};

console.log(myRecursiveReduce(names, counterNames, {}));
