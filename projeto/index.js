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
  .then(fn.filterReadData(".srt"))
  .then(fn.readFiles)
  .then(fn.mergeContent)
  .then(fn.separateTextBy("\n"))
  .then(fn.removeEmptyRows)
  .then(fn.removeRowsWithTime("-->"))
  .then(fn.removeRowsWithNumber)
  .then(fn.removeChar(simbols))
  .then(fn.mergeContent)
  .then(fn.separateTextBy(" "))
  .then(fn.removeEmptyRows)
  .then(fn.removeRowsWithNumber)
  .then(fn.groupWords)
  .then(fn.sortByNumericAttributeDesc("quantity"))
  .then(fn.saveFile(dir))
  .then(console.log);
