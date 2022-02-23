const {
  addEvenSubtractOdd,
  getLengthOfShortestString,
  getSmallestNumber,
  changeBusinessNameTo_TrueCoders,
  couldFormTriangle,
  isStringANumber,
  majorityOfElementsInArrayAreNull,
  averageEvens,
  factorial,
} = require("../challenges/challengeSet4");

test("1 | Should return the sum of numbers where evens are subtracted, odds added", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(addEvenSubtractOdd(testInput1)).toBe(4);
});

test("2 | Should return the length of the shortest string", () => {
  let testInput1 = ["apple", "orange", "banana", "grape", "kiwi"];
  expect(getLengthOfShortestString(...testInput1)).toBe("kiwi".length);
});

test("3 | Should return the smallest number", () => {
  let testInput1 = [1, 2, 3, 4, 5];
  expect(getSmallestNumber(...testInput1)).toBe(1);
});

test("4 | Should change the business object's name property to 'TrueCoders'", () => {
  let testInput1 = { name: "Square" };
  changeBusinessNameTo_TrueCoders(testInput1);
  expect(testInput1.name).toBe("TrueCoders");
});

test("5 | Should return true if the side lengths could form a triangle", () => {
  let testInput = [3, 4, 5];
  expect(couldFormTriangle(...testInput)).toBe(true);
});

test("6 | Should return true if the string can be converted to a number", () => {
  let testInput1 = "1OO";
  expect(isStringANumber(testInput1)).toBe(false);
});

test("7 | Should return true if the majority of the array elements are null", () => {
  let testInput1 = [null, 2, null, 4, 5];
  expect(majorityOfElementsInArrayAreNull(testInput1)).toBe(false);
});

test("8 | Should return the average between all even numbers", () => {
  let testInput1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  expect(averageEvens(testInput1)).toBe(11);
});

test("9 | Should return the factorial number from the input", () => {
  let testInput1 = 10;
  expect(factorial(testInput1)).toStrictEqual(3628800);
});
