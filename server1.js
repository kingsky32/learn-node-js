const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    console.log("서버 실행");
    fs.readFile("./server2.html", (err, data) => {
      if (err) throw err;
      res.end(data);
    });
  })
  .listen(8080);

server.on("listening", () => {
  console.log("Success Open Server!: http://localhost:8080");
});
server.on("error", err => {
  console.error(err);
});
