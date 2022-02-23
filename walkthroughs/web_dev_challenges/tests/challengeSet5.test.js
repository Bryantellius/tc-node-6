const {
  getNextNumberDivisibleByN,
  changeNamesOfBusinessesWithNoRevenueTo_CLOSED,
  isAscendingOrder,
  sumElementsThatFollowAnEven,
  turnWordsIntoSentence,
  getEveryFourthElement,
  twoDifferentElementsInArrayCanSumToTargetNumber,
} = require("../challenges/challengeSet5");

test("1 | Should return the next number divisible by the second parameter", () => {
  let testInput1 = [21, 20];
  expect(getNextNumberDivisibleByN(...testInput1)).toBe(40);
});

test("2 | Should return an array with all business names changed to 'CLOSED' if revenues is 0", () => {
  let testInput1 = [
    { name: "Google", revenues: 100 },
    { name: "Square", revenues: 50 },
    { name: "Facebook", revenues: 110 },
    { name: "Unknown", revenues: 0 },
    { name: "FailingBusiness", revenues: 0 },
  ];
  expect(
    changeNamesOfBusinessesWithNoRevenueTo_CLOSED(testInput1)
  ).toStrictEqual([
    { name: "Google", revenues: 100 },
    { name: "Square", revenues: 50 },
    { name: "Facebook", revenues: 110 },
    { name: "CLOSED", revenues: 0 },
    { name: "CLOSED", revenues: 0 },
  ]);
});

test("3 | Should return true if the numbers are in ascending order", () => {
  let testInput1 = [-3, -2, -1, 0, 1, 2, 3];
  expect(isAscendingOrder(testInput1)).toBe(true);
});

test("4 | Should return the sum of all numbers that follow an even number", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(sumElementsThatFollowAnEven(testInput1)).toBe(8);
});

test("5 | Should return a string sentence from the input words", () => {
  let testInput = ["This", "is", " ", "a", "test"];
  expect(turnWordsIntoSentence(testInput)).toBe("This is a test");
});

test("6 | Should return an array of every fourth element in the array", () => {
  let testInput1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  expect(getEveryFourthElement(testInput1)).toBe([4, 8, 12, 16]);
});

test("7 | Should return true if two numbers in the array can sum the second number parameter", () => {
  let testInput1 = [5, -2, 4, 6, 8];
  expect(twoDifferentElementsInArrayCanSumToTargetNumber(testInput1, 8)).toBe(
    false
  );
});
