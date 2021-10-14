const { describe, expect, it } = require("@jest/globals");
const { myFunc } = require("./index.js");

// test('', () => {
//     expect(false).toBeTruthy();
// })

describe("returns a matching number to a numeral", () => {
  it("returns one simple Roman Numeral's number", () => {
    const romanString1 = "I";
    expect(myFunc(romanString1)).toBe(1);
    const romanString5 = "V";
    expect(myFunc(romanString5)).toBe(5);
    const romanString10 = "X";
    expect(myFunc(romanString10)).toBe(10);
    const romanString50 = "L";
    expect(myFunc(romanString50)).toBe(50);
  });
  it("return two of the same Roman Numeral's combined number", () => {
    const romanString2 = "II";
    expect(myFunc(romanString2)).toBe(2);
    const romanString20 = "XX";
    expect(myFunc(romanString20)).toBe(20);
  });
  it("returns two different Roman Numerals' combined number", () => {
    const romanString7 = "VII";
    expect(myFunc(romanString7)).toBe(7);
    const romanString4 = "IV";
    expect(myFunc(romanString4)).toBe(4);
    const romanString13 = "XIII";
    expect(myFunc(romanString13)).toBe(13);
    const romanString9 = "IX";
    expect(myFunc(romanString9)).toBe(9);
    const romanString19 = "XIX";
    expect(myFunc(romanString19)).toBe(19);
    const romanString61 = "LXI";
    expect(myFunc(romanString61)).toBe(61);
    const romanString40 = "XL";
    expect(myFunc(romanString40)).toBe(40);
  });
});
