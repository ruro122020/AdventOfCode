const fs = require("fs");
const stringData = fs.readFileSync("./dayThree/data.txt");
let stringDataArray = stringData.toString().split("\r\n");
let oxygenGenerator = [];
let coTwoScrubber = [];
let countZero = 0;
let countOne = 0;

const filterBinaries = (i, num, boolean, array) => {
  return array.filter((string) => {
    if (boolean) {
      return string[i] === num;
    } else {
      return string[i] !== num;
    }
  });
};

const getLastBinaryNumber = (boolean, array) => {
  const length = array[0].length;
  for (let i = 0; i <= length; i++) {
    countZero = 0;
    countOne = 0;
    array.forEach((num) => {
      if (num[i] === "0") {
        countZero += 1;
      }
      if (num[i] === "1") {
        countOne += 1;
      }
    });
    if (array.length === 1) {
      return array[0];
    }
    if (countOne >= countZero) {
      console.log("here1", countOne, countZero);
      array = filterBinaries(i, "1", boolean, array);
    }
    if (countZero > countOne) {
      console.log("here2");
      array = filterBinaries(i, "0", boolean, array);
    }
  }
};
const copyOneArray = [...stringDataArray];
const copyTwoArray = [...stringDataArray];

oxygenGenerator.push(getLastBinaryNumber(true, copyOneArray));
coTwoScrubber.push(getLastBinaryNumber(false, copyTwoArray));
const oxyGenerator = parseInt(oxygenGenerator[0], 2);
const coTwoScrub = parseInt(coTwoScrubber[0], 2);
const finalAnswer = oxyGenerator * coTwoScrub;
console.log("final answer", finalAnswer);
