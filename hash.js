const crypto = require("crypto");

console.log(crypto.createHash("sha512").update("비밀번호").digest("base64"));
