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

function readFile(dir) {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFileSync(dir, { encoding: "utf-8" });
      resolve(data.toString());
    } catch (e) {
      reject(e);
    }
  });
}

function readFiles(dir) {
  return Promise.all(dir.map((element) => readFile(element)));
}

module.exports = {
  readDirectory,
  filterReadData,
  readFiles,
};
