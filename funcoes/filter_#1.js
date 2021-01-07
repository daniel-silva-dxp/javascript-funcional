const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 5, preco: 27.1 },
  { nome: "Lápis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const estoqueMaiorQueZero = (item) => item.qtde > 0;
const removerEstoqueZerado = carrinho.filter(estoqueMaiorQueZero);
console.log(removerEstoqueZerado);

// Implementando função que simula o filter
const myFilter = (arr, fn) => {
  const a = [];
  arr.forEach((el, i, array) => {
    if (fn(el, i, array)) a.push(el);
  });
  return a;
};

const estoqueMenorQueZero = (item) => item.qtde === 0;
const estoqueZerado = myFilter(carrinho, estoqueMenorQueZero);
console.log(estoqueZerado);

const estoqueBaixo = myFilter(carrinho, (item) => item.qtde <= 5);
console.log(estoqueBaixo);
