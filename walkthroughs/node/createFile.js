console.log("Running createFile.js");

const fs = require("fs");

fs.writeFile("./helloworld.txt", "Hello World!", (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Successfully created file");
});
