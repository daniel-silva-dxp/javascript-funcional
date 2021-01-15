const obj = {
  name: "Daniel",
  age: 33,
};

const proxy = new Proxy(obj, {
  get(target, name) {
    return name in target ? target[name] : "Sem valor atribuido";
  },
  set(target, name, value) {
    target[name] = value;
  },
});

proxy.name = "Daneil Silva";

console.log(obj.name);
console.log(proxy.name);
console.log("endereco" in proxy, proxy.endereco);
