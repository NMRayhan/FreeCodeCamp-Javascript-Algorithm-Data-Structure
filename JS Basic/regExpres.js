let chewieQuote = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"
let chewieRegex = /C+/g;
let result = chewieQuote.match(chewieRegex);
console.log(result);