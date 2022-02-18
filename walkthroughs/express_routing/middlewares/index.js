const path = require("path");

function handleErrors(err, req, res, next) {
  console.error(err);

  res.status(err.status || 500);

  if (err.status == 404) {
    res.sendFile(path.join(__dirname, "./public/serverError.html"));
  } else {
    res.json({
      msg: err.message || "An unexpected error occurred.",
      when: new Date().toString(),
      path: req.url,
      method: req.method,
    });
  }
}

function handle404s(req, res, next) {
  try {
    res.status(404).sendFile(path.join(__dirname, "./public/notFound.html"));
  } catch (e) {
    next(e);
  }
}

module.exports = {
  handle404s,
  handleErrors,
};
