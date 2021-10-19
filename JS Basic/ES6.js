const myFun = function () {
    const myVar = "Value";
    return myVar;
}
console.log(myFun());

const sumOfTwoInt = (num1, num2) => {
    const myVar = num1 + num2;
    return myVar;
}
console.log(sumOfTwoInt(1, 2));

const sum = (num1, num2) => num1 + num2;

console.log(sum(2, 5));

const magic = () => {
    return new Date();
};

console.log(magic());