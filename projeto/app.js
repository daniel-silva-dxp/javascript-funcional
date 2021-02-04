const fs = require("fs");
const path = require("path");

function readDirectory(dir) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(dir);
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
      return char.reduce((acc, simbol) => {
        return acc.split(simbol).join("");
      }, element);
    });
  };
}

function groupWords(words) {
  return Object.values(
    words.reduce((acc, word) => {
      const txt = word.toLowerCase();
      const quantity = acc[txt] ? acc[txt].quantity + 1 : 1;
      acc[txt] = { element: txt, quantity };
      return acc;
    }, {})
  );
}

function sortByNumericAttributeDesc(attr) {
  return function (arr) {
    return arr.sort((x, y) => y[attr] - x[attr]);
  };
}

function saveFile(dir) {
  return function (arr) {
    return new Promise((resolve, reject) => {
      try {
        fs.appendFile(`${dir}/data_count.json`, JSON.stringify(arr), (err) => {
          if (err) throw err;
          console.log("Arquivo Salvo!");
        });
      } catch (e) {
        reject(e);
      }
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
  groupWords,
  sortByNumericAttributeDesc,
  saveFile,
};
