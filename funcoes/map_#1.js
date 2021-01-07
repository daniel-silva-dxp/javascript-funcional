const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
const notasArredondadas = notas.map((nota) => Math.round(nota));
console.log(notasArredondadas);

const numeros = [2, 3, 5, 10, 1, 11, 25, 36, 45];
console.log(numeros.sort((a, b) => a - b));

const nomes = ["Daniel", "Matheus", "Flávia", "Ana"];
console.log(nomes.sort());

notas.map((value, index, arr) =>
  console.log(`Value: ${value}, Index: ${index}, Arrey: ${arr}`)
);

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lápis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (element) => element.nome;
console.log(carrinho.map(getNome));

const setTotal = (element) => {
  element.total = element.preco * element.qtde;
  return element;
};
console.log(carrinho.map(setTotal));

// Implementando função que simula o MAP

const myMap = (arr, fn) => {
  const a = [];
  arr.forEach((el, i, array) => a.push(fn(el, i, array)));
  return a;
};

const result = myMap(carrinho, getNome);

console.log(`resultado: ${result}`);

// Array.prototype.map() recursivo
const mapRecursivo = (a = [], fn = (item) => item) => {
  return (function fnInternal(arr, counter) {
    const [head, ...tail] = arr;
    return arr.length === 0
      ? []
      : [fn(head, counter, a), ...fnInternal(tail, counter + 1)];
  })(a, 0);
};

const productNames = mapRecursivo(carrinho, getNome);
console.log(productNames);
