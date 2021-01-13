const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: false },
  { nome: "Impressora", qtde: 2, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lápis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: false },
  { nome: "Monitor", qtde: 5, preco: 1235.99, fragil: true },
];

/**
 * 1. Retornar os itens fragil: true
 * 2. Retornar Quantidade e Preço
 * 3. Retornar a média dos totais
 */

// Itens fragil: true
const getFragil = (item) => item.fragil === true;
const isFragil = carrinho.filter(getFragil);
console.log(isFragil);

// Quantidade e Preço
const getQuantidadeEPreco = (item) => {
  const total = item.qtde * item.preco;
  return total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
const qtdeEPreco = carrinho.map(getQuantidadeEPreco);
console.log(qtdeEPreco);

// Retornar média
const getMedia = (acc, value, i, arr) => acc + value.preco / arr.length;

const media = carrinho.reduce(getMedia, 0);
console.log(media);
