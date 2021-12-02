const fs = require("fs");
const stringData = fs.readFileSync("./dayTwo/data.txt");
const stringDataArray = stringData.toString().split("\r\n");
let horizontal = 0;
let vertical = 0;
stringDataArray.forEach((string) => {
  const splitArray = string.split(" ");
  if (splitArray[0] === "forward") {
    horizontal += Number(splitArray[1]);
  }
  if (splitArray[0] === "down") {
    vertical += Number(splitArray[1]);
  }
  if (splitArray[0] === "up") {
    vertical -= Number(splitArray[1]);
  }
});
const finalAnswer = horizontal * vertical;
console.log("findalAnswer", finalAnswer);
