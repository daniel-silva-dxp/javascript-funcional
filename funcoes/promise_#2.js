const p = new Promise((resolve) => resolve(["Daniel", "Matheus", "Flávia"]));

p.then((data) => console.log(data));

const randomTime = (min, max) => {
  const maxInternal = max * 1000;
  const minInternal = min * 1000;
  return Math.floor(Math.random() * (maxInternal - minInternal) + minInternal);
};

const foo = (msg, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
};

const dataReturn = foo("Primeiro", randomTime(1, 3))
  .then((data) => {
    console.log(data);
    return foo("Segundo", randomTime(1, 3));
  })
  .then(console.log);

const user = fetch("http://jsonplaceholder.typicode.com/users/1");

user.then((data) => data.json()).then((data) => data);
