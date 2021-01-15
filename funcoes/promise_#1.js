const p = new Promise((fn) => fn(["Daniel", "Matheus", "Flávia"]));

p.then((data) => console.log(data));

const defer = new Promise((resolve, reject) => {
  setTimeout(() => {
    let state = true;
    state ? resolve("Hello! It works") : reject("Error!");
  }, 1000);
});

defer.then((data) => console.log(data));
