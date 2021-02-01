const randomTime = (min, max) => {
  const maxInternal = max * 1000;
  const minInternal = min * 1000;
  return Math.floor(Math.random() * (maxInternal - minInternal) + minInternal);
};

const foo = (msg, time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg), time);
  });
};

async function exec() {
  console.log("I");
  const dataReturn = await foo("Primeiro", randomTime(1, 3)).then(console.log);
  console.log("F");
}

exec();
