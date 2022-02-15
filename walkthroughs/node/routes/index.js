const fs = require("fs");
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
  "GET/projects": {
    statusCode: 200,
    filePath: path.join(__dirname, "../public/projects.html"),
    contentType: "text/html",
  },
  "GET/contact": {
    statusCode: 200,
    filePath: path.join(__dirname, "../public/contact.html"),
    contentType: "text/html",
  },
  "GET/api/all-react": {
    statusCode: 200,
    filePath: path.join(__dirname, "../../../reviews/all-react.md"),
    contentType: "text/md",
  },
  "POST/contact": {
    statusCode: 200,
    filePath: null,
    contentType: "application/json",
    response(contact, res) {
      let body = JSON.stringify({
        message: `Thank you for the message, ${contact.name}. We'll be in contact soon!`,
      });

      res.writeHead(this.statusCode, {
        "Content-Type": this.contentType,
      });
      res.write(body);
      res.end();
    },
  },
  "PUT/api/save": {
    statusCode: 200,
    filePath: null,
    contentType: "application/json",
    response(file, res) {
      fs.writeFile(file.name, file.content, (err) => {
        if (err) return res.emit("error", err);

        let body = JSON.stringify({
          message: `File, ${file.name}, has been saved!`,
        });

        res.writeHead(this.statusCode, {
          "Content-Type": this.contentType,
        });
        res.write(body);
        res.end();
      });
    },
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
