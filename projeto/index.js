const path = require("path");
const fn = require("./app");

const dir = path.join(__dirname, "data", "subtitle");

console.log(fn.readDirectory(dir));
