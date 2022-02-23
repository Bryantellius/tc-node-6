// 1. Write a function that accepts an array of strings. Return the longest string.
const longestStringSolution = (arr) => {
  return arr.reduce((longest, str) =>
    longest.length > str.length ? longest : str
  );
};

// 2. Write a function that takes a string, and returns the character that is most commonly used in the string.
const mostCommonCharacterSolution = (str) => {
  let chars = {};
  for (let i = 0; i < str.length; i++) {
    chars[str[i]] = ++chars[str[i]] || 1;
  }

  return Object.entries(chars).reduce((mostChar, char) =>
    mostChar[1] < char[1] ? char : mostChar
  )[0];
};

// 3. Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
const isAnagramSolution = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }

  return s1.split("").sort().join("") === s2.split("").sort().join("");
};

// 4. Given a string, write a function that will return whether or not that string is a palindrome.
const isPalindromeSolution = (str) => {
  let temp = str;
  return str === temp.split("").reverse().join("");
};

// 5. Given a string possibly containing three types of braces ({}, [], ()), write a function that returns a Boolean indicating whether the given string contains a valid nesting of braces.
const validEncasingsSolution = (str) => {
  const stack = [];
  let opening = ["{", "[", "("];
  let closing = ["}", "]", ")"];

  const matches = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      if (!stack.length) {
        return false;
      } else if (matches[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// 6.
const isArmstrongNumberSolution = (num) => {
  let strN = String(num);
  let power = strN.length;
  let sum = 0;
  for (let i = 0; i < strN.length; i++) {
    sum += Math.pow(Number(strN[i]), power);
  }
  return sum === num;
};

module.exports = {
  longestStringSolution,
  mostCommonCharacterSolution,
  isAnagramSolution,
  isPalindromeSolution,
  validEncasingsSolution,
  isArmstrongNumberSolution,
};
