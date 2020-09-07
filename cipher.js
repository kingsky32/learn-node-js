const crypto = require("crypto");

const cipher = crypto.createCipher("aes-256-cbc", "password");
let result = cipher.update("password", "utf8", "base64");
result += cipher.final("base64");
console.log("암호:", result);

const decipher = crypto.createCipher("aes-256-cbc", "password");
let result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");
console.log("암호:", result2);
