let quoteSample = "Beuare of Beware in Beiare the Beabove  uare code; I have only proved it correct, not tried it.";
let vowelRegex = /be[uwia]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result);