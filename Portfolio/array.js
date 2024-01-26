var myArray = [2, 5, 8, 11];

var addOne = function (num) {
    num += 1;
    console.log(num);
};

function checkNumber(func, number) {
    if (number % 2 === 0) {
        func(number);
    } else {
        console.log("The number is odd");
    }
}

var userNumber = prompt("Enter a number:");

if (!isNaN(userNumber)) {
    for (var index in myArray) {
        checkNumber(addOne, myArray[index] + parseInt(userNumber));
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}
