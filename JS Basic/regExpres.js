/*total 6 character and last 2 character is Digit*/

let sampleWord = "banana12";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/gi; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);