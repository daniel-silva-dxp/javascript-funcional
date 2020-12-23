const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "data.txt");

const viewData = (_, content) => {
  console.log(content.toString());
};
fs.readFile(dir, {}, viewData);

const fabricantes = ["Mercedes", "Audi", "BMW"];

const imprimir = (nome, indice) => console.log(`${indice + 1}: ${nome}`);
fabricantes.forEach(imprimir);

// Sem Callback
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];
const desaprovados = [];

for (let nota of notas) {
  if (nota < 7) {
    desaprovados.push(nota);
  }
}

console.log(desaprovados);

// Com Callback
const desaprovadosII = notas.filter((nota) => nota < 7);
console.log(desaprovadosII);
