console.log("Running deleteFile.js");

const fs = require("fs");

fs.unlink("./helloworld.txt", (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Successfully deleted file");
});
