const multiplier = num1 => num1 * 2;
console.log(multiplier(5));

const different = (num1, num2) => num1 - num2;
console.log(different(3, 2));

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// Only change code below this line
const increment = (number = 1, value = 1) => number + value;
// Only change code above this line
console.log(increment(5));