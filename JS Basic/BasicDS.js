const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let sum = 0;
let newArr = arr.splice(1,3);
console.log(newArr);
for(let i=0; i<newArr.length; i++){
  sum = sum + newArr[i];
}
// Only change code above this line
console.log(sum);