let obj = {
    name: "freeCodeCamp",
    review: "Awesome"
};
console.log(obj);
obj.name = "w3School";
console.log(obj);

Object.freeze(obj);
obj.name = "freeCodeCamp";
console.log(obj);


function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch (ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

//   Showing Error: [TypeError: Cannot assign to read only property 'PI' of object '#<Object>']