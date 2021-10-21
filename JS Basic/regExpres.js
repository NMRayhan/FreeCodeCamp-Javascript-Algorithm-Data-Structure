let myString ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi qui nobis unde aspernatur nisi maiores quis animi veniam! Impedit tempora fugit quasi ipsam officiis et eius similique, non sit, ab veniam laborum quas odio! Tempore error eligendi libero tenetur quas!";

let searchStr = /ab./gi; //using Wildcard Period .

let result = myString.match(searchStr);
console.log(result);
console.log(result.length);