const fs = require("fs");
const path = require("path");

function readDirectory(dir) {
  return new Promise((resolve, reject) => {
    try {
      let files = fs.readdirSync(dir);
      resolve(files.map((file) => path.join(dir, file)));
    } catch (e) {
      reject(e);
    }
  });
}

function filterReadData(arr, extension) {
  return arr.filter((element) => element.endsWith(extension));
}

module.exports = {
  readDirectory,
  filterReadData,
};
