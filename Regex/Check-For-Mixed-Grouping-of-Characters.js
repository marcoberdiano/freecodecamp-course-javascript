let myString = "Franklin D. Roosevelt";
let myRegex = /(Franklin|Franklin D.|Eleanor) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works

console.log(result)