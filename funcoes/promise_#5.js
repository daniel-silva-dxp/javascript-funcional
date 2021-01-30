const foo = (value, isErr) => {
  return new Promise((resolve, reject) => {
    Math.random() < isErr ? reject("Error...") : resolve(value);
  });
};

foo("Daniel Silva", 0.5)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
