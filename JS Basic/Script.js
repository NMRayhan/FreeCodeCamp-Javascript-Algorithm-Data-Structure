// Only change code below this line
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      var arr = countdown(n - 1)
      arr.unshift(n)
      return arr;
    }
  }
  // Only change code above this line
  console.log(countdown(10));