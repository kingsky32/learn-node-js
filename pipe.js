const fs = require("fs");
const zlib = require("zlib");

const zlibStream = zlib.createGzip();
const readStream = fs.createReadStream("./readme4.txt");
const writeStream = fs.createWriteStream("./writeme3.txt");
readStream.pipe(zlibStream).pipe(writeStream);
