const http = require("http");

class Math2 {
  static add(a, b) {
    return a + b;
  }
}

http
  .createServer((request, response) => {
    let a = Math.round(Math.random() * 10);
    let b = Math.round(Math.random() * 10);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(
      JSON.stringify({ problem: `${a} + ${b}`, answer: Math2.add(a, b) })
    );
    response.end();
  })
  .listen(3000, () => {
    console.log("Server listening on port: " + 3000);
  });
