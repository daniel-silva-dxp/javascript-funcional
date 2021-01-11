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

// Implementando função que simula o Array.reduce()

const myReduce = (arr, fn, initial) => {
  let acc = initial;
  arr.forEach((el, i, a) => {
    acc = fn(acc, el, i, a);
  });
  return acc;
};

console.log("my reduce", myReduce(numbers, sum, 0));
