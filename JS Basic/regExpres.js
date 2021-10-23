/*To specify a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.*/

let A4 = "haaaah";
let A2 = "haah";
let A10 = "h" + "a".repeat(10) + "h";
let multipleA = /ha{2}h/;
let result = multipleA.test(A4);
console.log(result);