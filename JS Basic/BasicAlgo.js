/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

Array.split() Method create a Array From String Separated By ""(comma)
Array.reverse() Method use Reverse and Return as New Array
Array.join() Method use for Join Separated Array by ""(empty String) and return as new String

*/

function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
}

console.log(reverseString("Nur Mohammad Rayhan"));