/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/


function repeatStringNumTimes(str, num) {
    let newAns = ""
    for(let count=0; count<num; count++){
        newAns = newAns + str;
    }
    return newAns;
}

console.log(repeatStringNumTimes("*", 3));