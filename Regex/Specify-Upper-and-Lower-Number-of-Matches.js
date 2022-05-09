let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // a letra 'h' pode aparecer entre 3x a 6x
let result = ohRegex.test(ohStr);
let str = ohStr.match(ohRegex);

console.log(str)