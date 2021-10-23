let quoteSample = "Coding! 42%";
let alphabetRegexV2 = /\d/g; // lowercase d for digit, this is equal to the Character class [0-9]
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);