const express = require("express");
const path = require("path");

const router = express.Router();

// PAGE ROUTES
router.get("/", (req, res, next) => {
  try {
    let filePath = path.join(__dirname, "../public/index.html");
    res.sendFile(filePath);
  } catch (e) {
    next(e);
  }
});

router.get("/about", (req, res, next) => {
  try {
    let filePath = path.join(__dirname, "../public/about.html");
    res.sendFile(filePath);
  } catch (e) {
    next(e);
  }
});

router.get("/pokemon", (req, res, next) => {
  try {
    let filePath = path.join(__dirname, "../public/pokemon.html");
    res.sendFile(filePath);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
