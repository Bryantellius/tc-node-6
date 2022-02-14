console.log("Hello World!");

// Write a function to remove the duplicates from a given array
let arr = [2, 1, 2, 3, 5, 4, 5, 5];

// Should be [2, 1, 3, 5, 4]
function pruneDups(list) {
  return [...new Set(list)];
}

console.log(pruneDups(arr));
