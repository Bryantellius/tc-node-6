const express = require("express");
const morgan = require("morgan");
const { join } = require("path");

const port = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "./public/index.html"));
  } catch (e) {
    next(e);
  }
});

app.get("/forms", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "./public/forms.html"));
  } catch (e) {
    next(e);
  }
});

app.post("/forms", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({ message: `Successfully received data.` });
  } catch (e) {
    next(e);
  }
});

app.put("/profile/:username", (req, res, next) => {
  try {
    console.log(req.params);
    res.json({ message: `Successfully updated ${req.params.username}` });
  } catch (e) {
    next(e);
  }
});

app.use((req, res, next) => {
  try {
    res.status(404).sendFile(join(__dirname, "./public/notFound.html"));
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).json({
    name: err.name || "Unknown Error",
    message: err.message || "An unexpected error occurred on the server.",
    when: new Date().toString(),
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));
