// IMPORTS
const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const { handle404s, handleErrors } = require("./middlewares");

// CONSTANTS
const port = 3001;
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.use(router);

// ERROR HANDLERS

// 404
app.use(handle404s);

// Server Errors
app.use(handleErrors);

// LISTEN ON PORT
app.listen(port, () => console.log(`Server running at port ${port}...`));
