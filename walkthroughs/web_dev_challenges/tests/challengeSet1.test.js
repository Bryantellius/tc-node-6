const faker = require("faker");
const {
  areTwoNumbersTheSame,
  subtract,
  add,
  getSmallestNumber,
  multiply,
  getGreeting,
  getHey,
} = require("../challenges/challengeSet1");
const {
  subtractSolution,
  addSolution,
  getSmallestNumberSolution,
  multiplySolution,
  getGreetingSolution,
  getHeySolution,
} = require("../solutions/challengeSet1");

test("1 | Should return the subtracted result", () => {
  let testInput1 = faker.datatype.number();
  let testInput2 = faker.datatype.number();
  expect(subtract(testInput1, testInput2)).toBe(
    subtractSolution(testInput1, testInput2)
  );
});

test("2 | Should return the sum", () => {
  let testInput1 = faker.datatype.number();
  let testInput2 = faker.datatype.number();
  expect(add(testInput1, testInput2)).toBe(addSolution(testInput1, testInput2));
});

test("3 | Should return the minimum number", () => {
  let testInput1 = faker.datatype.number();
  let testInput2 = faker.datatype.number();
  expect(getSmallestNumber(testInput1, testInput2)).toBe(
    getSmallestNumberSolution(testInput1, testInput2)
  );
});

test("4 | Should return the correct product", () => {
  let testInput1 = faker.datatype.number();
  let testInput2 = faker.datatype.number();
  expect(multiply(testInput1, testInput2)).toBe(
    multiplySolution(testInput1, testInput2)
  );
});

test("5 | Should return 'Hey, <name>'", () => {
  let testInput = faker.name.firstName();
  expect(getGreeting(testInput)).toBe(getGreetingSolution(testInput));
});

test("6 | Should return 'Hey'", () => {
  expect(getHey()).toBe(getHeySolution());
});

test("7 | Should return true if both numbers are equal", () => {
  expect(areTwoNumbersTheSame(7, 10)).toBe(false);
});
