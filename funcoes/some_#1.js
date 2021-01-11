const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lápis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];
const temEstoque = carrinho.some((item) => item.qtde > 0);
console.log(temEstoque);

// Implementando função que simula o Array.some()

const mySome = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) return true;
  }
  return false;
};

console.log(mySome(carrinho, (item) => item.qtde === 10));

// Implementando função recursiva que simula o Array.some()

const myRecursiveSome = (arr, fn) => {
  return (function fnInternal(a, counter) {
    const [head, ...tail] = a;
    return a.length === 0
      ? false
      : fn(head, counter, a)
      ? true
      : fnInternal(tail, counter + 1);
  })(arr, 0);
};

console.log(myRecursiveSome(carrinho, (item) => item.qtde === 3));
