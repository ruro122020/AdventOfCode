const fs = require("fs");
const stringData = fs.readFileSync("./dayTwo/data.txt");
const stringDataArray = stringData.toString().split("\r\n");
let forward = 0;
let aim = 0;
let depth = 0;
stringDataArray.forEach((string) => {
  const splitString = string.split(" ");
  if (splitString[0] === "forward") {
    forward += Number(splitString[1]);
    depth += aim * Number(splitString[1]);
  }
  if (splitString[0] === "down") {
    aim += Number(splitString[1]);
  }
  if (splitString[0] === "up") {
    aim -= Number(splitString[1]);
  }
});
console.log(depth * forward);
