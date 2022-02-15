console.log("Running readFile.js\n");

const fs = require("fs");

fs.readFile("helloworld.txt", (err, contents) => {
  if (err) {
    return console.error(err);
  }

  let parsedText = contents.toString();
  
  console.log(parsedText);
  console.log("\nSuccessfully read contents");
});
