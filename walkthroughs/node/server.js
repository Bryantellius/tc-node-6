const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "../../reviews/css-flexbox-grid.md");

fs.readFile(filePath, (err, content) => {
  if (err) return console.error(err);

  let trimmedContent = content.toString().replace(/\W|_|\d/g, "");

  let results = trimmedContent.split("").reduce((values, char) => {
    let charLower = char.toLowerCase();
    values[charLower] = values[charLower] ? values[charLower] + 1 : 1;
    return values;
  }, {});

  let finalResults = Object.entries(results).sort((a, b) => b[1] - a[1]); // [[letter, count], ...]

  console.log(
    finalResults[0][0] +
      " was the most common letter, used " +
      finalResults[0][1] +
      " times."
  );
});
