const fs = require("fs");
const stringData = fs.readFileSync("./dayOne/data.txt");
const stringDataArray = stringData.toString().split("\r\n");
const arrayOfNumbers = stringDataArray.map((num) => Number(num));
let count = 0;
arrayOfNumbers.forEach((number, index, array) => {
  const twoBeforeCurrent = array[index - 2];
  const current = array[index];
  const beforeCurrent = array[index - 1];
  const afterCurrent = array[index + 1];
  const previousGroupOfNumbers = twoBeforeCurrent + beforeCurrent + current;
  const currentGroupOfNumbers = beforeCurrent + current + afterCurrent;

  if (
    twoBeforeCurrent &&
    afterCurrent &&
    currentGroupOfNumbers > previousGroupOfNumbers
  ) {
    count += 1;
  }
});
console.log("count", count);
