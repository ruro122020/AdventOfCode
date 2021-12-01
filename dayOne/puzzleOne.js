const fs = require("fs");
const stringData = fs.readFileSync("./dayOne/data.txt");
const stringDataArray = stringData.toString().split("\r\n");
const arrayOfNumbers = stringDataArray.map((num) => Number(num));
let count = 0;
arrayOfNumbers.forEach((number, index, array) => {
  const previousNumber = array[index - 1];
  if (previousNumber && number > previousNumber) {
    count += 1;
  }
});
console.log(count);
