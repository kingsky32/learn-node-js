const url = require("url");

const URL = url.URL;
const myURL = new URL("http://kingsky32.co.kr");
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("-------------------------------");
const parsedUrl = url.parse("http://kingsky32.co.kr");
console.log("url.parse():", parsedUrl);
