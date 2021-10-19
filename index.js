const myFunc = (romanString, numeralObject) => {
  let splitString = romanString.split("");

  let arabicNum = 0;

  for (let i = 0; i < splitString.length; i += 1) {
    if (
      numeralObject[splitString[i]] < numeralObject[splitString[i + 1]] &&
      splitString[i + 1]
    ) {
      arabicNum -= numeralObject[splitString[i]];
    } else {
      arabicNum += numeralObject[splitString[i]];
    }
  }

  return arabicNum;
};
module.exports = {
  myFunc,
};
