function sum(arr, n) {
    // Only change code below this line
    var total = 0;
    if (n <= 0) {
        return n;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

console.log(sum([1, 2, 3, 4], 2));