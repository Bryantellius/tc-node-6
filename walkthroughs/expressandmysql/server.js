const express = require("express");
const morgan = require("morgan");
const apiRouter = require("./routes");
const port = 5000;

const app = express();

// Request Logger
app.use(morgan("dev"));

// Request Body Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
app.use("/api/v1", apiRouter);

// 404 Handler
app.use((req, res, next) => {
  try {
    res.status(404).json({
      msg: "Your requested path does not exist. Check your request url and try again.",
      when: new Date().toString(),
    });
  } catch (e) {
    next(e);
  }
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ name: err.name, msg: err.message, when: new Date().toString() });
});

app.listen(port, () => console.log(`Server running at port ${port}...`));
