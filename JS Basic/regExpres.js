let quoteSample = "Coding! 42%";
let alphabetRegexV2 = /\D/g; // Uppercase D for non-digit character, this is equal to the Character class [^0-9]
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);