const path = require("path");
const fn = require("./app");

const dir = path.join(__dirname, "data", "subtitle");

fn.readDirectory(dir)
  .then((files) => fn.filterReadData(files, ".srt"))
  .then((fileSrt) => fn.readFiles(fileSrt))
  .then((content) => content.join("\n"))
  .then((str) => str.split("\n"))
  .then((rows) => fn.removeEmptyRows(rows))
  .then((rows) => fn.removeRowsWithTime(rows, "-->"))
  .then(console.log);
