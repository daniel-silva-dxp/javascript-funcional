const path = require("path");
const fn = require("./app");

const dir = path.join(__dirname, "data", "subtitle");

const simbols = [
  ".",
  "?",
  "!",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

fn.readDirectory(dir)
  .then((files) => fn.filterReadData(".srt")(files))
  .then(fn.readFiles)
  .then((content) => content.join("\n"))
  .then((str) => str.split("\n"))
  .then(fn.removeEmptyRows)
  .then((rows) => fn.removeRowsWithTime("-->")(rows))
  .then(fn.removeRowsWithNumber)
  .then((text) => fn.removeChar(simbols)(text))
  .then(console.log);
