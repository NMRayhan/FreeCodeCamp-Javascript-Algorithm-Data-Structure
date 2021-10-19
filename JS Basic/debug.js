function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

console.log(rangeOfNumbers(2, 5));