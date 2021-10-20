const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

function personFunction() {
    return person;
}

console.log(personFunction());

person.age = 20;
person.location = "Dhaka";

console.log(personFunction());

console.log(person.hasOwnProperty("location"));
