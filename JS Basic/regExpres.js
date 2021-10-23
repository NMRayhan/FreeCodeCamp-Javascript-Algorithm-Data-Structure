let quoteSample = "Coding! 42%";
let alphabetRegexV2 = /[^A-Za-z0-9_]/g; // \W. or Uppercase W this is the Shortcut is Equals to [^A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);