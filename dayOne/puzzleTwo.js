const fs = require("fs");
const stringData = fs.readFileSync("./dayOne/data.txt");
const stringDataArray = stringData.toString().split("\r\n");
const arrayOfNumbers = stringDataArray.map((num) => Number(num));
let count = 0;

arrayOfNumbers.forEach((currentNumber, index, array) => {
  const twoBeforeCurrent = array[index - 2];
  const beforeCurrent = array[index - 1];
  const afterCurrent = array[index + 1];
  const previousGroupOfNumbers =
    twoBeforeCurrent + beforeCurrent + currentNumber;
  const currentGroupOfNumbers = beforeCurrent + currentNumber + afterCurrent;

  if (
    twoBeforeCurrent &&
    beforeCurrent &&
    afterCurrent &&
    currentGroupOfNumbers > previousGroupOfNumbers
  ) {
    count += 1;
  }
});
console.log("count", count);
