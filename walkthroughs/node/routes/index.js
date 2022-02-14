const path = require("path");

const routes = {
  "GET/": {
    statusCode: 200,
    filePath: path.join(__dirname, "../public/index.html"),
    contentType: "text/html",
  },
  "GET/about": {
    statusCode: 200,
    filePath: path.join(__dirname, "../public/about.html"),
    contentType: "text/html",
  },
  "GET/contact": {
    statusCode: 200,
    filePath: path.join(__dirname, "../public/contact.html"),
    contentType: "text/html",
  },
  "*": {
    statusCode: 200,
    filePath: path.join(__dirname, "../public/notfound.html"),
    contentType: "text/html",
  },
};

module.exports = routes;
// same as
// export default routes;
