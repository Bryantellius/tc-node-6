console.log("Hello World!");

// Rest Operator
// Any parameter passed in with be placed (rested) in an array value called nums
function add(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

console.log(add(1)); // 1
console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

// Spread Operator
// Spreads out individual values from an array
let nums = [2, 3, 4];
let completeNums = [1, ...nums, 5];

console.log(completeNums); // [1, 2, 3, 4, 5]

// YOU CAN EVEN SPREAD OBJECT PROPERY/VALUES
let values = {
  title: "Hello World!",
  count: 0,
};

let reactElement = {
  props: { ...values }
}

console.log(newObj);
