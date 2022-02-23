const faker = require("faker");
const {
  countOfPositiveOddsBelowNumber,
  isSumOdd,
  sumEvens,
  sum,
  getLengthOfShortestString,
  isNumberEven,
  isNumberOdd,
  sumOfMinAndMax,
  countOfElementsIsEven,
  characterIsALetter,
} = require("../challenges/challengeSet2");
const {
  countOfPositiveOddsBelowNumberSolution,
  isSumOddSolution,
  sumEvensSolution,
  sumSolution,
  getLengthOfShortestStringSolution,
  isNumberEvenSolution,
  isNumberOddSolution,
  sumOfMinAndMaxSolution,
  countOfElementsIsEvenSolution,
  characterIsALetterSolution,
} = require("../solutions/challengeSet2");

test("1 | Should return true/false if the input is a letter", () => {
  let testInput1 = faker.datatype.string(1);
  expect(characterIsALetter(testInput1)).toBe(
    characterIsALetterSolution(testInput1)
  );
});

test("2 | Should true/false if the length of the elements is even", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(countOfElementsIsEven(testInput1)).toBe(
    countOfElementsIsEvenSolution(testInput1)
  );
});

test("3 | Should return true/false if the number is even", () => {
  let testInput1 = faker.datatype.number();
  expect(isNumberEven(testInput1)).toBe(isNumberEvenSolution(testInput1));
});

test("4 | Should return true/false if the number is odd", () => {
  let testInput1 = faker.datatype.number();
  expect(isNumberOdd(testInput1)).toBe(isNumberOddSolution(testInput1));
});

test("5 | Should return the sum of the minimum and maximum numbers in an array", () => {
  let testInput = [1, 2, 3, 4, 5];
  expect(sumOfMinAndMax(testInput)).toBe(sumOfMinAndMaxSolution(testInput));
});

test("6 | Should return the length of the shorter string input", () => {
  let testInput1 = faker.datatype.string(5);
  let testInput2 = faker.datatype.string(8);
  expect(getLengthOfShortestString(testInput1, testInput2)).toBe(
    getLengthOfShortestStringSolution(testInput1, testInput2)
  );
});

test("7 | Should return the sum from a number array", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(sum(testInput1)).toBe(sumSolution(testInput1));
});

test("8 | Should return the sum from a number array for even numbers", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(sumEvens(testInput1)).toBe(sumEvensSolution(testInput1));
});

test("9 | Should return true/false if the sum from a number array is odd", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(isSumOdd(testInput1)).toBe(isSumOddSolution(testInput1));
});

test("10 | Should return a number for the count of positive numbers below a range limit", () => {
  let testInput1 = faker.datatype.number(1000);
  expect(countOfPositiveOddsBelowNumber(testInput1)).toBe(
    countOfPositiveOddsBelowNumberSolution(testInput1)
  );
});
