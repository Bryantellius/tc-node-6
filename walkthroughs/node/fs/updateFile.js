console.log("Running updateFile.js");

const fs = require("fs");

fs.appendFile("helloworld.txt", "\nHello World x2\nHello World x3", (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Successfully appended to file");
});
