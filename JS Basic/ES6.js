let str = "Apple, Banana, Kiwi";
console.log(str.slice(6, 13));
console.log(str.slice(-12, -6));

console.log(str.substring(6, 13));


let str2 = "Daffodil International University";

for (let i = 0; i < str.length; i+=1){
    console.log(str2.substr(i));
}

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

let newText2 = text.replace(/MICROSOFT/i,"W3Schools")
console.log(newText2);