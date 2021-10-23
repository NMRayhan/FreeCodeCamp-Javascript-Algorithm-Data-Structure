let quoteSample = "Pack my box with five dozen liquor jugs";
let alphabetRegexV2 = /\w/g; // Change this line \w. this is the Shortcut is Equals to [A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);