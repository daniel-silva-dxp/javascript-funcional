const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lápis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const temEstoque = carrinho.every((item) => item.qtde > 0);
console.log(temEstoque);

// Implementando função que simula o Array.every()

const myEvery = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i, arr)) return false;
  }
  return true;
};

console.log(myEvery(carrinho, (item) => item.qtde > 0));

// Implementando função recursiva que simula o Array.every()

const myRecursiveEvery = (arr, fn) => {
  return (function fnInternal(a, counter) {
    const [head, ...tail] = a;
    return a.length === 0
      ? true
      : !fn(head, counter, a)
      ? false
      : fnInternal(tail, counter + 1);
  })(arr, 0);
};

console.log(myRecursiveEvery(carrinho, (item) => item.qtde >= 0));
