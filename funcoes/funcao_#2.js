// Callbacks
function foo(name) {
  console.log(`Hello ${name}`);
}

function bar(cb) {
  cb("Daniel Silva");
}

bar(foo);

// Retornando funções
function potencia(base) {
  return (exp) => Math.pow(base, exp);
}

const x = potencia(2);
console.log(x(8));
// OU
console.log(potencia(3)(4));
