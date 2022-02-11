const http = require("http"); // CommonJS syntax
// import http from "http"    // ESM syntax

class Math2 {
  static add(a, b) {
    return a + b;
  }
}

http
  .createServer((request, response) => {
    let a = Math.round(Math.random() * 100);
    let b = Math.round(Math.random() * 100);

    let bufferChunks = [];

    request.on("data", (chunk) => bufferChunks.push(chunk));

    request.on("end", () => {
      try {
        if (request.url == "/") {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write("Home");
        } else if (request.url == "/math") {
          response.writeHead(200, { "Content-Type": "application/json" });
          response.write(
            JSON.stringify({ problem: `${a} + ${b}`, answer: Math2.add(a, b) })
          );
        } else if (request.url == "/test" && request.method == "POST") {
          let body = JSON.parse(Buffer.concat(bufferChunks).toString());
          body.confirmation = true;

          response.writeHead(200, { "Content-Type": "application/json" });
          response.write(JSON.stringify(body));
        } else {
          response.writeHead(404, { "Content-Type": "text/html" });
          response.write("<h1>404 Not Found</h1><a href='/'>Try here.</a>");
        }

        response.end();
      } catch (e) {
        console.log(e);
        response.writeHead(e.statusCode || 500, {
          "Content-Type": "application/json",
        });
        response.write(
          JSON.stringify({
            error: {
              ...e,
            },
            clientMessage: "An error occurred on the server. Try again later.",
          })
        );
        response.end();
      }
    });
  })
  .listen(3000, () => {
    console.log("Server listening on port: " + 3000);
  });
