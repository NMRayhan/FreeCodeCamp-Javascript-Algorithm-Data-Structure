function checkSign1(num) {
    if (num === 0) {
        return "zero"
    } else if (num > 0) {
        return "positive";
    } else {
        return "negative";
    }
}

console.log(checkSign1(-1));

function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}
console.log(checkSign(-1));