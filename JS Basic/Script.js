function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        var arr = countdown(n - 1)
        arr.unshift(n)
        return arr;
    }
}
console.log(countdown(10));

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.splice(0, 0, n);
        return arr;
    }
}
console.log(countdown(11));

function countdown(n) {
    return n < 1 ? [] : [n].concat(countdown(n - 1));
}
console.log(countdown(12));

function countdown(n) {
    return n < 1 ? [] : [n, ...countdown(n - 1)];
}
console.log(countdown(7));