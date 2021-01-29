const generateNumbersBetween = (min = 1, max = 5, time = 1000) => {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    setTimeout(() => {
      const result = parseInt(Math.random() * (max - min + 1) + min);
      resolve(result);
    }, time);
  });
};

const result = generateNumbersBetween().then((num) => console.log(num * 10));

const generateMultipleNumbers = () => {
  return Promise.all([
    generateNumbersBetween(1, 10, 5000),
    generateNumbersBetween(),
    generateNumbersBetween(1, 10, 2000),
    generateNumbersBetween(1, 10, 1500),
    generateNumbersBetween(1, 10, 3000),
  ]);
};

console.time("promise all");
generateMultipleNumbers()
  .then(console.log)
  .then(() => console.timeEnd("promise"));

const p = Promise.all([1, 2, 3]);
const p2 = Promise.all([1, 2, 3, Promise.resolve("Daniel Silva")]);
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

const arrPromisesResolve = [
  Promise.resolve("Daniel"),
  Promise.resolve("Silva"),
];

const p4 = Promise.all(arrPromisesResolve);
console.log(p4);

setTimeout(() => {
  console.log("the pile is empty now");
  console.log(p4);
});
