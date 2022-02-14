const fs = require("fs");
const path = require("path");
const http = require("http");

const routes = require("./routes");

const port = 5000;

http
  .createServer((req, res) => {
    let route = routes[req.method + req.url] || routes["*"];

    console.log(req.url, req.method, route);

    fs.readFile(route.filePath, (err, contents) => {
      if (err) {
        console.error(err);
        return res.end("Failed");
      }

      res.writeHead(route.statusCode, { "Content-Type": route.contentType });
      res.write(contents);
      res.end();
    });
  })
  .listen(port, () => console.log(`Server listening on port ${port}`));
