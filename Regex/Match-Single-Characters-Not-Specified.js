/*let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result)
*/


const email = "mparaujop@gmail.com"

let myReg = /.*@(gmail|hotmail).com/

let result = email.match(myReg);

console.log(result)