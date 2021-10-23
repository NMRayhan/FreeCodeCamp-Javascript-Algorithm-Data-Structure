/*You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.*/

let A4 = "haaaah";
let A2 = "haah";
let A10 = "h" + "a".repeat(10) + "h";
let multipleA = /ha{2,}h/;
let result = multipleA.test(A2);
console.log(result);