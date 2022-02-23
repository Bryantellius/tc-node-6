const {
  longestString,
  mostCommonCharacter,
  isAnagram,
  isPalindrome,
  validEncasings,
  isArmstrongNumber,
} = require("../challenges/advanced-challenges");

// 1.
test(`1 | Should return the longest string`, () => {
  testInput = ["Please", "Excuse", "My", "Dear", "Aunt", "Sally"];
  expect(longestString(testInput)).toBe("Please");
});

// 2.
test("2 | Should return the most recurring character", () => {
  let testInput = "Been";
  expect(mostCommonCharacter(testInput)).toBe("e");
});

// 3.
test("3 | Should return true/false if input is an anagram", () => {
  let testInput1 = "adverb";
  let testInput2 = "braved";
  expect(isAnagram(testInput1, testInput2)).toBe(true);
});

// 4.
test("4 | Should return true/false if input is a palindrome", () => {
  let testInput = "adverb";
  expect(isPalindrome(testInput)).toBe(false);
});

// 5.
test("5 | Should return true/false if input has valid syntax enclosings", () => {
  let testInput = "function ( { console.log('Hello World') };";
  expect(validEncasings(testInput)).toBe(true);
});

// 6.
test("6 | Should return true/false if input is an Armstrong number", () => {
  let testInput = 370;
  expect(isArmstrongNumber(testInput)).toBe(true);
});
