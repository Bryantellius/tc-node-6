// ROUTES:
// home
// about
// contact
// not found

const http = require("http");
const port = 3001;

http
  .createServer((request, response) => {
    const { url, method } = request;
    const chunksArray = [];

    request.on("data", (chunk) => chunksArray.push(chunk));

    request.on("end", () => {
      let statusCode = 200;
      let responseBody;
      let contentType = "text/html";

      switch (method + url) {
        case "GET/":
          responseBody = "<h1>Home</h1>";
          break;
        case "GET/about":
          responseBody = "<h1>About</h1>";
          break;
        case "POST/contact":
          let requestBody = JSON.parse(Buffer.concat(chunksArray).toString());
          console.log(requestBody);
          responseBody = `<h1>Thank you for contacting me. I'll reach out to you soon, ${requestBody.name}</h1>`;
          break;
        default:
          // 404 not found
          statusCode = 404;
          responseBody = "<h1>Page Not Found</h1><a href='/'>Try Home</a>";
      }

      response.writeHead(statusCode, { "Content-Type": contentType });
      response.write(responseBody);
      response.end();
    });
  })
  .listen(port, () => console.log(`Server listening on port ${port}...`));
