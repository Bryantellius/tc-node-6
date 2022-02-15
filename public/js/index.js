console.log("Hello World!");

// Write a function to remove the duplicates from a given array
let arr = [2, 1, 2, 3, 5, 4, 5, 5];

// Should be [2, 1, 3, 5, 4]
function pruneDups(list) {
  return [...new Set(list)];
}

function filterDups(list) {
  return list.filter((num, index) => list.indexOf(num) == index);
}

// Avg time: 3.2ms
console.time("Using Filter");
console.log(filterDups(arr));
console.timeEnd("Using Filter");

// Avg time: 0.33ms
// Using Set is 10x faster
console.time("Using Set");
console.log(pruneDups(arr));
console.timeEnd("Using Set");
