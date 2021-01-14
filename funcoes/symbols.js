/**
 *
 * Symbol é um tipo primitivo que não se modifica e é único
 * Ele pode ser usado como chave de uma propriedade de objeto quando este tem a
 * intenção de ser privada, para uso interno da classe ou do tipo do objeto em
 * questão.
 *
 */

const foo = Symbol("name");

console.log(typeof foo);

const obj = {
  [Symbol("name")]: "Daniel",
  [Symbol("age")]: 33,
  city: "Suzano",
};

console.log(obj);

console.log(Object.keys(obj));

// Pegar todas as propiedades que são Symbols no obj
const symbols = Object.getOwnPropertySymbols(obj);
const data = symbols.map((item) => obj[item]);
console.log(data);
