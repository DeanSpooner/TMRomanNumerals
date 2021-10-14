const myFunc = (romanString) => {
  let splitString = romanString.split("");

  const romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arabicNum = 0;

  for (let i = 0; i < splitString.length; i += 1) {
    if (
      romanNums[splitString[i]] < romanNums[splitString[i + 1]] &&
      splitString[i + 1]
    ) {
      arabicNum -= romanNums[splitString[i]];
    } else {
      arabicNum += romanNums[splitString[i]];
    }
  }

  return arabicNum;
};
module.exports = {
  myFunc,
};
