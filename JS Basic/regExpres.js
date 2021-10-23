/*Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].*/


let ohStr = "Ohhhh no";
let ohRegex = /oh{3,6}\sno/gi; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);