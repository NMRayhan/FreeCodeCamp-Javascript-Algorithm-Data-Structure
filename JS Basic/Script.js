function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum == 0) {
        return [startNum];
    } else {
        var arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr
    }
};

console.log(rangeOfNumbers(2, 5));