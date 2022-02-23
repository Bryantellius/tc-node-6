const faker = require("faker");
const {
  arrayContainsAFalse,
  isSumOfOddsOdd,
  passwordContainsUpperLowerAndNumber,
  getFirstLetterOfString,
  getLastLetterOfString,
  divide,
  lastMinusFirst,
  getOddsBelow100,
  changeAllElementsToUppercase,
} = require("../challenges/challengeSet3");

test("1 | Should return true if the array contains false", () => {
  let testInput1 = [true, true, true, false];
  expect(arrayContainsAFalse(testInput1)).toBe(true);
});

test("2 | Should true if the sum of the odd numbers is odd", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(isSumOfOddsOdd(testInput1)).toBe(false);
});

test("3 | Should return true if the input contains an uppercase letter, lowercase letter and number", () => {
  let testInput1 = "Apple123";
  expect(passwordContainsUpperLowerAndNumber(testInput1)).toBe(true);
});

test("4 | Should return the first letter of a string", () => {
  let testInput1 = "Apple";
  expect(getFirstLetterOfString(testInput1)).toBe("A");
});

test("5 | Should return the last letter of a string", () => {
  let testInput = "Apple";
  expect(getLastLetterOfString(testInput)).toBe("e");
});

test("6 | Should return the resulting division rounded to the nearest integer", () => {
  let testInput1 = faker.datatype.number(100);
  let testInput2 = faker.datatype.number(100);
  expect(divide(testInput1, testInput2)).toBe(
    Math.round(testInput1 / testInput2)
  );
});

test("7 | Should return the last number in the array subtracted by the first number in the array", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(lastMinusFirst(testInput1)).toBe(4);
});

test("8 | Should return an array of all odd numbers below 100", () => {
  let result = [
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
    41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77,
    79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99,
  ];
  expect(getOddsBelow100()).toBe(result);
});

test("9 | Should return an array ", () => {
  let testInput1 = ["frodo", "Fr0d0", "FRODO", ""];
  expect(changeAllElementsToUppercase(testInput1)).toStrictEqual([
    "FRODO",
    "FR0D0",
    "FRODO",
    "",
  ]);
});
