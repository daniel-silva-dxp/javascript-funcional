const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

// Paradigma Imperativo

const media = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
};

const n = media(notas).toFixed(2);
console.log(n); // 7.63;

// Paradigma Declarativo

const soma = (a, b) => a + b;
const dividir = (a, b) => a / b;

const media2 = dividir(notas.reduce(soma), notas.length);
console.log(media2.toFixed(2));
//TESTE
