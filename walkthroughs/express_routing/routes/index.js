const express = require("express")
const pageRouter = require("./pages")
const pokemonRouter = require("./pokemon")

const router = express.Router()

router.use("/api/pokemon", pokemonRouter);
router.use(pageRouter);

module.exports = router;