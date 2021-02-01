const randomTime = (min, max) => {
  const maxInternal = max * 1000;
  const minInternal = min * 1000;
  return Math.floor(Math.random() * (maxInternal - minInternal) + minInternal);
};

const foo = (msg, time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg), time);
  });
};

async function exec() {
  console.log("I");
  const dataReturn = await foo("Primeiro", randomTime(1, 3));
  console.log("F");
}

// exec().then(console.log);

const generateNumbersBetween = (min = 1, max = 5, repeatedNumbers = []) => {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const result = parseInt(Math.random() * (max - min + 1) + min);
    repeatedNumbers.includes(result)
      ? reject("Repeated Number")
      : resolve(result);
  });
};

async function megaSena(quantityOfNumbers = 5, counter = 1) {
  try {
    const arr = [];
    for (let _ of Array(quantityOfNumbers).fill()) {
      arr.push(await generateNumbersBetween(1, 60, arr));
    }

    return arr;
  } catch (e) {
    if (counter > 5) throw "Exceeded attempt limit";

    return megaSena(quantityOfNumbers, counter + 1);
  }
}

megaSena(5).then(console.log).catch(console.log);
