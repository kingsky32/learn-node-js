const http = require("http");
const fs = require("fs");

const parseCookies = (cookie = "") => {
  cookie
    .split(";")
    .map(v => v.split("="))
    .map(([k, ...vs]) => [k, vs.join("=")])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});
};

const server = http
  .createServer((req, res) => {
    console.log(req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
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
