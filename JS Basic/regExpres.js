/*total 6 character and last 2 character is Digit*/

let wrongString = "The sky is silver";
let silverString = /silver/;
let result = wrongString.replace(silverString, "Blue");
console.log(result);