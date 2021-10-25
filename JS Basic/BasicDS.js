/*
A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
foods.banana = 13;
foods["grapes"] = 35;
const specialFood = "strawberries"
foods[specialFood] = 27;
console.log(foods);