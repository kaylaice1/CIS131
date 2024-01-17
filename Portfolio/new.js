//KayLynn Johnson 01/17/23

let myNumber = 5;
myNumber = myNumber * 5;

let userValue = prompt("What is your favorite number?");
console.log("myNumber:", myNumber);
console.log("userValue:", userValue);

function processNumber(value) {
    if (value % 2 !== 0) {
        console.log(value);
    }
    return value + 1;
}

let startNumber = 7;

for (let i = 0; i < 5; i++) {
    startNumber = processNumber(startNumber);
}