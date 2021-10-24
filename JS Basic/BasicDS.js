/*
We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
*/ 

function htmlColorNames(arr) {
    let startIndex = 0;
    let amountOfDelete = 2;
    arr.splice(startIndex, amountOfDelete, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));