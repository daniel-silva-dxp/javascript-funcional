/**
 * Desenvolva uma função JavaScript para
 * que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
 */

const moeda = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

console.log(moeda(0.300000000000004));
