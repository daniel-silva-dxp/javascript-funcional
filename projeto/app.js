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

function filterReadData(extension) {
  return function (arr) {
    return arr.filter((element) => element.endsWith(extension));
  };
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

function mergeContent(arr) {
  return arr.join(" ");
}

function separateTextBy(char) {
  return function (txt) {
    return txt.split(char);
  };
}

function removeEmptyRows(arr) {
  return arr.filter((row) => row.trim());
}

function removeRowsWithTime(textualPattern) {
  return function (arr) {
    return arr.filter((row) => !row.includes(textualPattern));
  };
}

function removeRowsWithNumber(arr) {
  return arr.filter((element) => {
    const num = parseInt(element.trim());
    return num !== num;
  });
}

function removeChar(char) {
  return function (arr) {
    return arr.map((element) => {
      let txt = element;
      char.forEach((simbol) => {
        txt = txt.split(simbol).join("");
      });
      return txt;
    });
  };
}

module.exports = {
  readDirectory,
  filterReadData,
  readFiles,
  mergeContent,
  separateTextBy,
  removeEmptyRows,
  removeRowsWithTime,
  removeRowsWithNumber,
  removeChar,
};
