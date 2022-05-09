let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // a letra 'm' tem que aparecer exatamente 4x
let result = timRegex.test(timStr);
let str = timStr.match(timRegex)

console.log(str)