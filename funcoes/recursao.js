const arr = [4, 20, 36, 20, 20];

const sum = (a) => {
  const [head, ...tail] = a;
  return a.length === 0 ? 0 : head + sum(tail);
};

console.log(sum(arr));

// Array.prototype.map() recursivo
const cart = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lápis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getName = (element) => element.nome;

const myMap = (a = [], fn = (item) => item) => {
  return (function fnInternal(arr, counter) {
    const [head, ...tail] = arr;
    return arr.length === 0
      ? []
      : [fn(head, counter, a), ...fnInternal(tail, counter + 1)];
  })(a, 0);
};

const productNames = myMap(cart, getName);
console.log(productNames);
