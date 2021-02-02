const fs = require("fs");
const path = require("path");

function readDirectory(dir) {
  let files = fs.readdirSync(dir);
  return files.map((file) => path.join(dir, file));
}

module.exports = {
  readDirectory,
};
