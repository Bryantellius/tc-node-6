function characterIsALetterSolution(c) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  return letters.includes(c);
}

function countOfElementsIsEvenSolution(vals) {
  return !Boolean(vals.length % 2);
}

function isNumberEvenSolution(number) {
  return !Boolean(number % 2);
}

function isNumberOddSolution(num) {
  return Boolean(num % 2);
}

function sumOfMinAndMaxSolution(numbers) {
  return Math.min(...numbers) + Math.max(...numbers);
}

function getLengthOfShortestStringSolution(str1, str2) {
  return str1.length < str2.length ? str1.length : str2.length;
}

function sumSolution(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

function sumEvensSolution(numbers) {
  return numbers.reduce((acc, num) => (num % 2 ? acc : acc + num), 0);
}

function isSumOddSolution(numbers) {
  let sum = numbers.reduce((acc, num) => (num % 2 ? acc + num : acc), 0);
  return Boolean(sum % 2);
}

function countOfPositiveOddsBelowNumberSolution(number) {
  let count = 0;
  for (let i = 1; i < number; i += 2) {
    count++;
  }
  return count;
}

module.exports = {
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
};
