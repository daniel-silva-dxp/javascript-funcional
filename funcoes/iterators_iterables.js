const txt = "Daniel";
const it = txt[Symbol.iterator]();

console.log(it.next());

const person = ["Daniel", "Silva", 33];

for (data of person[Symbol.iterator]()) {
  console.log(data);
}

// Generator

const ajax = (url) =>
  fetch(url)
    .then((data) => data.json)
    .then((data) => dados.next(data));

function* ajaxGen() {
  console.log("Buscando dados github...");
  const github = yield ajax("https://api.github.com/users/daniel-silva-dxp");
  console.log(github);
}

const dados = ajaxGen();
dados.next();
