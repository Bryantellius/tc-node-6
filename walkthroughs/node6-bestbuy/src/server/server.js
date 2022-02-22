import express from "express";
import morgan from "morgan";
import apiRouter from "./routes";
import { join } from "path";
import config from "./config";

const app = express();

// parses incoming request body as json if header indicates application/json
app.use(express.json());
// logs incoming request information to the dev console
app.use(morgan("dev"));
// directs incoming static asset requests to the public folder
app.use(express.static("public"));

app.use("/api", apiRouter);

// sends the react app index.html
app.use("*", (req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../public/index.html"));
  } catch (error) {
    next(error);
  }
});

// generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    name: err.name || "Unknown error",
    msg: err.message || "An error occurred on the server.",
  });
});

app.listen(config.port || 3000, () =>
  console.log(`Server listening on port ${config.port}...`)
);
