const http = require("http");

http
  .createServer((req, res) => {
    console.log("서버 실행");
    res.write("<h1>Hello Node!</h1>");
    res.write("<h2>Hello JS!</h2>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080, () => {
    console.log("Success Open Server!: http://localhost:8080");
  });
