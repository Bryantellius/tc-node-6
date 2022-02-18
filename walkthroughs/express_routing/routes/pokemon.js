const express = require("express");
const path = require("path");
const fs = require("fs");

const pokemonFile = path.join(__dirname, "../public/pokemon.json");

const router = express.Router();

router.get("/test", (req, res, next) => {
  try {
    res.send("PASS");
  } catch (e) {
    res.send("FAIL");
  }
});

router.get("/:id?", (req, res, next) => {
  try {
    if (req.params.id) {
      fs.readFile(pokemonFile, (err, contents) => {
        if (err) next(err);

        let data = JSON.parse(contents.toString());
        let pokemon = data.pokemon.find((poke) => poke.id == req.params.id);

        res.json(
          pokemon || {
            msg: "There is no pokemon with the id of " + req.params.id,
          }
        );
      });
    } else {
      res.sendFile(path.join(__dirname, "../public/pokemon.json"));
    }
  } catch (e) {
    next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    let newPokemon = req.body;

    if (!newPokemon.name) {
      throw new Error("Pokemon should have a 'name' property");
    }

    fs.readFile(pokemonFile, (err, contents) => {
      if (err) next(err);

      let data = JSON.parse(contents.toString());
      let nextId = data.pokemon[data.pokemon.length - 1].id + 1;
      data.pokemon.push({
        ...newPokemon,
        id: nextId,
        num: String(nextId).padStart(3, "0"),
      });
      fs.writeFile(pokemonFile, JSON.stringify(data), (err) => {
        if (err) next(e);

        res.json({
          msg: `Successfully added new pokemon`,
          when: new Date().toString(),
        });
      });
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
