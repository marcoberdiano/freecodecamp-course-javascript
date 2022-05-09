let repeatNum = "100 100 100";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
let str = repeatNum.match(reRegex)

console.log(str)