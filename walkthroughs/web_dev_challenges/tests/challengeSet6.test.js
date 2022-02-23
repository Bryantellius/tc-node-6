const {
  collectionContainsWord,
  isPrimeNumber,
  indexOfLastUniqueLetter,
  maxConsecutiveCount,
  getEveryNthElement,
} = require("../challenges/challengeSet6");

test("1 | Should return true if the array contains a word accounting for case sensitivity", () => {
  let testInput1 = ["AlPha", "bravo", "charlie"];
  expect(collectionContainsWord(testInput1, "alpha", true)).toBe(true);
});

test("2 | Should return true if the number is a prime number", () => {
  let testInput1 = 37117;
  expect(isPrimeNumber(testInput1)).toBe(true);
});

test("3 | Should return the index of the last unique letter in the string", () => {
  let testInput1 = "aaabbbcdddeeeffg";
  expect(indexOfLastUniqueLetter(testInput1)).toBe(15);
});

test("4 | Should return the max count of consecutive same numbers", () => {
  let testInput1 = [10, 3, 1, 1, 1, 5, 1];
  expect(maxConsecutiveCount(testInput1)).toBe(3);
});

test("5 | Should return an array of numbers every Nth position in the input array", () => {
  let testInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  expect(getEveryNthElement(testInput, 4)).toBe([4, 8, 12]);
});
