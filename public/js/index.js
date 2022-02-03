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
const state = ["state", (newState) => console.log(newState)];

function actOnState(state, setState) {
  setState("New Value");
}

actOnState(...state);

// YOU CAN EVEN SPREAD OBJECT PROPERY/VALUES
let obj = {
  name: "Ben",
  value: "On an object",
  city: "Hoover",
};

let newObj = {
  ...obj,
  city: "Birmingham",
  state: "Alabama",
};

console.log(newObj);
