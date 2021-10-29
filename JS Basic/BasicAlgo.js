/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
    let separetStr = str.split(" ");
    let newStr = "";
    for (let i = 0; i < separetStr.length; i++) {
        if (separetStr[i].length > newStr.length){
            newStr = separetStr[i];
        }
    }
    return newStr.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));