let haStr = "Hazzzzah";
let haRegex = /Haz{3,}ah/; // a letra 'z' tem que aparecer no minimo 3x
let result = haRegex.test(haStr);
let str = haStr.match(haRegex)

console.log(str)