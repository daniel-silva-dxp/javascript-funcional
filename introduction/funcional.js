// Declaração simpres
function dobro(x) {
  return x * 2;
}
console.log(dobro(20));

const alunos = [
  { nome: "Ana", nota: 9.5 },
  { nome: "Bia", nota: 7.3 },
  { nome: "Gil", nota: 5.8 },
  { nome: "Leo", nota: 7.6 },
  { nome: "Gui", nota: 9.1 },
  { nome: "Lia", nota: 4.9 },
  { nome: "Rui", nota: 7.0 },
];

// Imperativo
const aprovados = (alunos) => {
  let arr = [];
  for (let i in alunos) {
    if (alunos[i].nota >= 7) arr.push(alunos[i]);
  }
  return arr;
};

console.log(aprovados(alunos));

// Delcarativo
const estaAprovado = (aluno) => aluno.nota >= 7;
const aprovados2 = alunos.filter(estaAprovado);

console.log(aprovados2);

// Composição de Funções
const foo = (x) => (y) => x + y;
const bar = foo(10);

console.log(bar(15));
