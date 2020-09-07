const util = require("util");
const crypto = require("crypto");

const dontuseme = util.deprecate((x, y) => {
  console.log(x + y);
}, "이 함수는 2018년 12월 부로 지원하지 않습니다.");

dontuseme(1, 2);

const ramdomBytesPromise = util.promisify(crypto.randomBytes);

ramdomBytesPromise(64)
  .then(buf => {
    const salt = buf.toString("base64");
    return pdkdf2Promise("비밀번호", salt, 3215121, 64, "sha512");
  })
  .then(key => {
    console.log("password", key.toString("base64"));
  })
  .catch(err => {
    console.log(err);
  });
