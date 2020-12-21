// soma(3)(4)(5)
const somar = function (n) {
  return function (x) {
    return function (y) {
      return n + x + y;
    };
  };
};

console.log(somar(3)(4)(5));

// calcular(3)(7)(fn)
const calcular = function (x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
};

function sum(x, y) {
  return x + y;
}

console.log(calcular(10)(20)(sum));
