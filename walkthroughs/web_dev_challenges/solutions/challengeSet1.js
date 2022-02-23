function areTwoNumbersTheSame(num1, num2) {
  if (num1 == num2) {
    return true;
  } else {
    return false;
  }
}

function subtractSolution(minuend, subtrahend) {
  return minuend - subtrahend;
}

function addSolution(number1, number2) {
  return number1 + number2;
}

function getSmallestNumberSolution(number1, number2) {
  return Math.min(number1, number2);
}

function multiplySolution(factor1, factor2) {
  return factor1 * factor2;
}

function getGreetingSolution(nameOfPerson) {
  return `Hey, ${nameOfPerson}!`;
}

function getHeySolution() {
  return "Hey";
}

module.exports = {
  subtractSolution,
  addSolution,
  getSmallestNumberSolution,
  multiplySolution,
  getGreetingSolution,
  getHeySolution,
};
