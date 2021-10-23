let rickyAndCal = "Ricky9@gmail.com";
let calRegex = /^[a-z]+[0-9]/gi; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result);