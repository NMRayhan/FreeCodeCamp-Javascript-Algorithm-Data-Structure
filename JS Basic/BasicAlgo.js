/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/


function titleCase(str) {
    let newArr = str.split(" ")
    let newStr = " "
    for (let i = 0; i < newArr.length; i++) {
        let upperStr = newArr[i].toLowerCase();
        let newUpperStr = upperStr.charAt(0).toUpperCase() + upperStr.slice(1);
        newStr = newStr + newUpperStr+" ";
    }
    return newStr;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));