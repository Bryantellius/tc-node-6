# Review 2/14/22 - Node HTTP Module

## What is Node?

An _Asynchronous_, _event driven_ _JavaScript runtime environment_ (built on the Chrome V8 engine)

## Modules

1. Core Modules
2. Local Modules
3. 3rd Party modules (from NPM)

## CommonJS

The pre-ESM syntax for importing/exporting modules.

```js
// CommonJS
const http = require("http");

// ESM
import http from "http";
```

## HTTP Module

Module for creating development or production servers that respond to HTTP/HTTPS requests.

Helpful `request` properties:

- `url`
- `method`

Example Server:

```js
http
  .createServer((request, response) => {
    let bufferChunks = [];
    request.on("data", (chunk) => bufferChunks.push(chunk));

    request.on("end", () => {
      let data = "<h1>Not Found</h1>";
      let statusCode = 404;

      if (request.url == "/" && request.method == "GET") {
        data = "<h1>Hello World!</h1>";
        statusCode = 200;
      } else if (request.url == "/about" && request.method == "GET") {
        data = "<h1>About page</h1>";
        statusCode = 200;
      } else if (request.url == "/signup" && request.method == "POST") {
        let requestBody = JSON.parse(Buffer.concat(bufferChunks).toString());
        // ... next logic to handle a signup
        data = "<h1>Signup successful</h1>";
        statusCode = 200;
      }

      response.writeHead(statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  })
  .listen(8000, () => console.log("Server listening on port: 8000"));
```
