const fs = require("fs");
const http = require("http");
const path = require("path");

const {
  MIMETypes,
  handleErrorResponse,
  updateContactFile,
} = require("./utils");
const routes = require("./routes");
const { EventEmitter } = require("events");

const ContactEmitter = new EventEmitter();

ContactEmitter.on("new", (contact) =>
  console.log(`${contact.name} just said: '${contact.message}'`)
);

const port = 5000;

http
  .createServer((req, res) => {
    let parsedPath = path.parse(req.url);

    req.on("error", (err) => handleErrorResponse(err, res));
    res.on("error", (err) => handleErrorResponse(err, res));
    // ContactEmitter.on("new", updateContactFile);


    if (parsedPath.ext) {
      fs.readFile(
        path.join(__dirname, "public", parsedPath.dir, parsedPath.base),
        (err, contents) => {
          if (err) {
            return res.emit("error", err);
          }

          let contentType = MIMETypes[parsedPath.ext];

          res.writeHead(200, {
            "Content-Type": contentType,
          });
          res.write(contents);
          res.end();
        }
      );
    } else {
      let chunksArr = [];
      let route = routes[req.method + req.url] || routes["*"];

      ContactEmitter.on("new", (contact) => route.response(contact, res));

      req.on("data", (chunk) => chunksArr.push(chunk));

      req.on("end", () => {
        if (req.method == "POST" || req.method == "PUT") {
          let reqBody = JSON.parse(Buffer.concat(chunksArr).toString());
          if (req.url == "/contact") {
            ContactEmitter.emit("new", reqBody);
          } else {
            route.response(reqBody, res);
          }
        } else {
          fs.readFile(route.filePath, (err, contents) => {
            if (err) {
              return res.emit("error", err);
            }

            res.writeHead(route.statusCode, {
              "Content-Type": route.contentType,
            });
            res.write(contents);
            res.end();
          });
        }
      });
    }
  })
  .listen(port, () => console.log(`Server listening on port ${port}`));
