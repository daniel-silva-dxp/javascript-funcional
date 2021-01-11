const names = ["Daniel", "Flávia", "Matheus"];
const numbers = [1, 2, 3, 4, 5];

const reverse = names.reverse();
console.log(reverse);

// Implementando função que simula o Array.reverse()

const myReverse = (arr) => {
  let a = [];
  for (let i = arr.length; i--; ) {
    a.push(arr[i]);
  }
  arr = a;
  return arr;
};

console.log(myReverse(names));

// Implementando função recursiva que simula o Array.reverse()

const myRecursiveReverse = (arr) => {
  return (function fnInternal(a, counter) {
    const [head, ...tail] = a;
    return a.length === 0 ? [] : [...fnInternal(tail, counter - 1), head];
  })(arr, arr.length);
};

console.log(myRecursiveReverse(numbers));
