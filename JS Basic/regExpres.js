/*total 6 character and last 2 character is Digit*/

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor)\sRoosevelt/;
let result = myRegex.test(myString);
console.log(result);