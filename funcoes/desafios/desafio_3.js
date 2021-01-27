const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "data.json");

const readData = (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, {}, (_, content) => {
      resolve(JSON.parse(content));
    });
  });
};

readData(dir).then((data) => console.log(data));
