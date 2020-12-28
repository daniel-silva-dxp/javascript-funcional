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
