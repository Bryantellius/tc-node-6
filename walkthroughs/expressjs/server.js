const express = require("express");
const { join } = require("path");

const port = 3001;
const app = express();

app.use(customMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "./public/index.html"));
  } catch (e) {
    console.error(e);
  }
});

app.get("/forms", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "./public/forms.html"));
  } catch (e) {
    console.error(e);
  }
});

app.post("/forms", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({ message: `Successfully received data.` });
  } catch (e) {
    console.error(e);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));

function customMiddleware(req, res, next) {
  console.log(req.url + " at " + new Date().toLocaleTimeString());
  next();
}
