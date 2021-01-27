const gerarNumerosEntre = (min = 1, max = 5) => {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    const valor = parseInt(Math.random() * (max - min + 1) + min);
    resolve(valor);
  });
};

const result = gerarNumerosEntre().then((num) => console.log(num * 10));
