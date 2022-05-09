let favWord = "favorite";
let favRegex = /favou?rite/; // a letra 'u' pode ou não estar presente
let result = favRegex.test(favWord);
let str = favWord.match(favRegex)
console.log(str)