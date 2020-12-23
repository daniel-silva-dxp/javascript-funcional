/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores.
 */

const calc = (arr, operator) => {
  const obj = {
    "+": () => arr.reduce((acc, curr) => acc + curr),
    "-": () => arr.reduce((acc, curr) => acc - curr),
    "*": () => arr.reduce((acc, curr) => acc * curr),
    "/": () => arr.reduce((acc, curr) => acc / curr),
  };

  return obj[operator]();
};

console.log(calc([10, 15], "/"));
