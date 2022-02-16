const {
  createReadStream,
  createWriteStream,
  readFile,
  writeFile,
} = require("fs");
const { join } = require("path");
const fetch = require("isomorphic-fetch");

let readSource = join(__dirname, "../public/about.html");
let writeSource = join(__dirname, "../data/about.copy.html");

// readFile(readSource, (err, contents) => {
//   if (err) return console.error(err);

//   writeFile(writeSource, contents, (err) => {
//     if (err) return console.error(err);

//     console.log("Successfully copied file");
//   });
// });

// let readStream = createReadStream(readSource);
// let writeStream = createWriteStream(writeSource);

// readStream.pipe(writeStream);

fetch(
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
)
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error);
