const fs = require("fs");
const stringData = fs.readFileSync("./dayThree/data.txt");
const stringDataArray = stringData.toString().split("\r\n");
let gamma = [];
let epsilon = [];
let count = [];

stringDataArray.forEach((num) => {
  const splitBinaryNumber = num.split("");
  splitBinaryNumber.forEach((el, i) => {
    if (!count[i]) {
      count[i] = {};
      count[i]["zeros"] = 0;
      count[i]["ones"] = 0;
    }
    if (el === "0") {
      count[i]["zeros"] += 1;
    }
    if (el === "1") {
      count[i]["ones"] += 1;
    }
  });
});
count.forEach((el) => {
  if (el.zeros > el.ones) {
    gamma.push(0);
    epsilon.push(1);
  }
  if (el.ones > el.zeros) {
    gamma.push(1);
    epsilon.push(0);
  }
});

const gammaRate = gamma.join("");
const epsilonRate = epsilon.join("");
const gammaRateDecimal = parseInt(gammaRate, 2);
const epsilonRateDecimal = parseInt(epsilonRate, 2);
const finalAnswer = gammaRateDecimal * epsilonRateDecimal;
console.log(finalAnswer);
