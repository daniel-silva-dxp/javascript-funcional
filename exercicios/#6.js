/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 * primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros compostos.
 */

const calcularJurosComposto = (c, i, t) => {
  let m = 0;
  i /= 100;
  t /= 12;
  m = c * (1 + i) ** t;
  return m.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const calcularJurosSimples = (c, i, t) => {
  let m = 0;
  i /= 100;
  t /= 12;
  m = c + c * i * t;
  return m.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

console.log(calcularJurosComposto(1500, 10, 36));
console.log(calcularJurosSimples(1000, 10, 36));
