/*
indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
*/

function quickCheck(arr, elem) {
    let boolAns = arr.indexOf(elem);
    if(boolAns>=0){
        return true;
    }else{
        return false
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));