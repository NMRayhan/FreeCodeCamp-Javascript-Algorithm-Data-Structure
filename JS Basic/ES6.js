const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [a, b, ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);

const personOne = {
    name: "Towfiq Elahi Plabon",
    age: 28,
    address: {
        city: "JoypureHat",
        States: "Rajshahi"
    }
}

const person = ({name, age, address:{city, States}}) =>{
    return `My Name is ${name}, I'm ${age}'s Old and i'm from ${city}, it's States of ${States}`;
}

console.log(person(personOne));
