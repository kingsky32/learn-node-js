const fs = require("fs");
fs.readFile("./readme.txt", (err, data) => {
  if (err) trhow(err);
  console.log(data.toString());
});
