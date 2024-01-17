//KayLynn Johnson 01/17/23
"use script";

let myNumber = 5;
myNumber = myNumber * 5;

let userValue = prompt("What is your favorite number?");
console.log("myNumber:", myNumber);
console.log("userValue:", userValue);

const html = <p>Number = ${userValue}</p>
document.write(html);