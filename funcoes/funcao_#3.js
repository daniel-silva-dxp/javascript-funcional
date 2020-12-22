// Arrow function
const materials = ["Hydrogem", "Helium", "Lithium", "Beryllium"];

const materialsLength = materials.map((material) => material.length);
console.log(materialsLength);
// OU
const arr = materials.map(({ length }) => length);
console.log(arr);

const persons = [
  {
    name: "Daniel",
    lastname: "Silva",
    age: 33,
  },
  {
    name: "Matheus",
    lastname: "Silva",
    age: 5,
  },
  {
    name: "Flávia",
    lastname: "Silva",
    age: 26,
  },
];

const p = persons.map(({ name, lastname }) => `${name} ${lastname}`);
console.log(p);
