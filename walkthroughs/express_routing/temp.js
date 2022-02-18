const fetch = require("isomorphic-fetch");
const { writeFile } = require("fs");

fetch(
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
)
  .then((res) => res.text())
  .then((contents) => {
    writeFile("./public/pokemon.json", contents, (err) => {
      if (err) return console.error(err);
    });
  });
