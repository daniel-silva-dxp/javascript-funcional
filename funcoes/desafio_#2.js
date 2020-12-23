const exec = (fn, a, b) => fn(a, b);
const somar = (a, b) => console.log(a + b);
const subtrair = (a, b) => console.log(a - b);

exec(somar, 56, 38);
exec(subtrair, 182, 27);
