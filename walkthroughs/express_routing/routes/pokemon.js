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

router.put("/", (req, res, next) => {
  try {
    let { id } = req.body;

    if (!id)
      res
        .status(400)
        .json({ msg: "You must provide an 'id' property with your request." });
    else {
      fs.readFile(pokemonFile, (err, contents) => {
        if (err) next(err);

        let data = JSON.parse(contents.toString());

        data.pokemon = data.pokemon.map((poke) => {
          if (poke.id == id) {
            return { ...poke, ...req.body };
          } else return poke;
        });

        fs.writeFile(pokemonFile, JSON.stringify(data), (err) => {
          if (err) next(err);

          res.json({
            msg: `Successfully updated pokemon with '${id}' id`,
            when: new Date().toString(),
          });
        });
      });
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", (req, res, next) => {
  let { id } = req.params;

  if (!id)
    res
      .status(400)
      .json({ msg: "You must provide a pokemon 'id' property to delete." });
  else {
    fs.readFile(pokemonFile, (err, contents) => {
      if (err) next(err);

      let data = JSON.parse(contents.toString());

      data.pokemon = data.pokemon.filter((poke) => poke.id != id);

      fs.writeFile(pokemonFile, JSON.stringify(data), (err) => {
        if (err) next(err);

        res.json({
          msg: `Successfully deleted pokemon with id of '${id}'`,
          when: new Date().toString(),
        });
      });
    });
  }
});

module.exports = router;
