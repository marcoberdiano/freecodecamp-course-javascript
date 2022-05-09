/*
    Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, 
    and have two consecutive digits.
*/
let sampleWord = "abc123";
let pwRegex = /(?=\w{5,})(?=\D+\d\d)/; // Change this line
let result = pwRegex.test(sampleWord);
let str = sampleWord.match(pwRegex)

console.log(str)