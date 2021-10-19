const { describe, expect, it } = require("@jest/globals");
const { myFunc } = require("./index.js");

// test('', () => {
//     expect(false).toBeTruthy();
// })

const romanNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const abcNums = {
  A: 1,
  B: 5,
  C: 10,
  D: 50,
  E: 100,
  F: 500,
  G: 1000,
};

describe("returns a matching number to a numeral", () => {
  it("returns one simple Roman Numeral's number", () => {
    const romanString1 = "I";
    expect(myFunc(romanString1, romanNums)).toBe(1);
    const romanString5 = "V";
    expect(myFunc(romanString5, romanNums)).toBe(5);
    const romanString10 = "X";
    expect(myFunc(romanString10, romanNums)).toBe(10);
    const romanString50 = "L";
    expect(myFunc(romanString50, romanNums)).toBe(50);
  });
  it("returns one simple ABC Numeral's number", () => {
    const romanString1 = "A";
    expect(myFunc(romanString1, abcNums)).toBe(1);
    const romanString5 = "B";
    expect(myFunc(romanString5, abcNums)).toBe(5);
    const romanString10 = "C";
    expect(myFunc(romanString10, abcNums)).toBe(10);
    const romanString50 = "D";
    expect(myFunc(romanString50, abcNums)).toBe(50);
  });
  it("return two of the same Roman Numeral's combined number", () => {
    const romanString2 = "II";
    expect(myFunc(romanString2, romanNums)).toBe(2);
    const romanString20 = "XX";
    expect(myFunc(romanString20, romanNums)).toBe(20);
  });
  it("return two of the same ABC Numeral's combined number", () => {
    const romanString2 = "AA";
    expect(myFunc(romanString2, abcNums)).toBe(2);
    const romanString20 = "CC";
    expect(myFunc(romanString20, abcNums)).toBe(20);
  });
  it("returns two different Roman Numerals' combined number", () => {
    const romanString7 = "VII";
    expect(myFunc(romanString7, romanNums)).toBe(7);
    const romanString4 = "IV";
    expect(myFunc(romanString4, romanNums)).toBe(4);
    const romanString13 = "XIII";
    expect(myFunc(romanString13, romanNums)).toBe(13);
    const romanString9 = "IX";
    expect(myFunc(romanString9, romanNums)).toBe(9);
    const romanString19 = "XIX";
    expect(myFunc(romanString19, romanNums)).toBe(19);
    const romanString61 = "LXI";
    expect(myFunc(romanString61, romanNums)).toBe(61);
    const romanString40 = "XL";
    expect(myFunc(romanString40, romanNums)).toBe(40);
    const romanString3759 = "MMMDCCLIX";
    expect(myFunc(romanString3759, romanNums)).toBe(3759);
    const romanString3999 = "MMMCMXCIX";
    expect(myFunc(romanString3999, romanNums)).toBe(3999);
  });
  it("returns two different ABC Numerals' combined number", () => {
    const abcString8 = "BAAA";
    expect(myFunc(abcString8, abcNums)).toBe(8);
    const abcString4 = "AB";
    expect(myFunc(abcString4, abcNums)).toBe(4);
    const abcString12 = "CAA";
    expect(myFunc(abcString12, abcNums)).toBe(12);
    const abcString9 = "AC";
    expect(myFunc(abcString9, abcNums)).toBe(9);
    const abcString19 = "CAC";
    expect(myFunc(abcString19, abcNums)).toBe(19);
    const abcString72 = "DCCAA";
    expect(myFunc(abcString72, abcNums)).toBe(72);
    const abcString40 = "CD";
    expect(myFunc(abcString40, abcNums)).toBe(40);
    const abcString3660 = "GGGFEDC";
    expect(myFunc(abcString3660, abcNums)).toBe(3660);
    const abcString3999 = "GGGEGCEAC";
    expect(myFunc(abcString3999, abcNums)).toBe(3999);
  });
});
