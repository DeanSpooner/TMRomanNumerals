const myFunc = (romanString) => {
  let splitString = romanString.split("");
  let arabicNum = 0;
  const is40 = splitString[i] === "X" && splitString[i + 1] === "L";
  for (let i = 0; i < splitString.length; i += 1) {
    if (is40) {
      arabicNum -= 10;
    } else if (splitString[i] === "L") {
      arabicNum += 50;
    } else if (
      splitString[i] === "I" &&
      splitString[i + 1] !== "I" &&
      splitString[i + 1]
    ) {
      arabicNum -= 1;
    } else if (splitString[i] === "X") {
      arabicNum += 10;
    } else if (splitString[i] === "V") {
      arabicNum += 5;
    } else if (splitString[i] === "I") {
      arabicNum += 1;
    }
  }

  return arabicNum;
};
module.exports = {
  myFunc,
};
