// Blank array to hold values
let arr = [];

// Function to update output paragraph
function update() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output

    arr.reduce((accumulator, currentValue, index) => {
        output.innerHTML += `${index + 1}. ${currentValue}<br>`;
    }, '');
}

// Function to push item into array
function pushItem() {
    const inputText = document.getElementById('inputText').value;
    arr.push(inputText);
    update();
}

// Function to pop item from array
function popItem() {
    arr.pop();
    update();
}

// Function to unshift item into array
function unshiftItem() {
    const inputText = document.getElementById('inputText').value;
    arr.unshift(inputText);
    update();
}

// Function to shift item from array
function shiftItem() {
    arr.shift();
    update();
}

// Function to map input to each element of array
function arrMap() {
    const inputText = document.getElementById('inputText').value;
    arr = arr.map(item => inputText + item);
    update();
}
