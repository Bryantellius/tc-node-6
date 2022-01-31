console.log("Hello World!");

// Immutability
let scores = [
  { student: "Ben", score: 88 },
  { student: "Seth", score: 91 },
  { student: "Cruz", score: 100 },
];

function updateScore(scores, student, newScore) {
  // Do not change the param array itself, but return a altered, new array
  // This is changing the param value..
  // scores.forEach((person) => {
  //   if (person.student == student) {
  //     person.score = newScore;
  //   }
  // });

  // Use .map to return a new array that does not mutate the existing array value (param)
  return scores.map((person) => {
    if (person.student == student) {
      person.score = newScore;
    }

    return person;
  });
}

scores = updateScore(scores, "Ben", 90);

// Reference Values (leads to the .bind reason in class components)

// Value vs Reference Data Types
// Value Data Types: String, number, boolean, null, undefined, symbol, bigint
// Reference Data Types: Objects (arrays, functions, etc)

let number1 = { value: 10 };
let number2 = number1; // { value: 10 }

number1.value += 10;
console.log(number1); // 20
console.log(number2); // 20

number2.value = "now they are both strings";
console.log(number1); // "now they are both strings"
console.log(number2); // "now they are both strings"

// Object Destructuring
// Given an object, create a variable with the property name, and assign it the property value

let { value } = number1;
console.log(value);

// Array Destructuring
let [ben, seth, cruz] = scores;
console.log(ben);
