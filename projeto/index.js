const path = require("path");
const fn = require("./app");

const dir = path.join(__dirname, "data", "subtitle");

fn.readDirectory(dir)
  .then((files) => fn.filterReadData(files, ".srt"))
  .then(console.log);
