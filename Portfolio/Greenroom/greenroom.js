// Retrieve data from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    input1.value = localStorage.getItem('input1Data') || '';
    input2.value = localStorage.getItem('input2Data') || '';
    output1.textContent = input1.value;
    output2.textContent = input2.value;
});

input1.addEventListener('input', function() {
    updateOutput(input1, output1);
    saveData('input1Data', input1.value);
});

input2.addEventListener('input', function() {
    updateOutput(input2, output2);
    saveData('input2Data', input2.value);
});

input1.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        saveData('input1Data', input1.value);
    }
});

input2.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        saveData('input2Data', input2.value);
    }
});

function updateOutput(input, output) {
    output.textContent = input.value;
}

function saveData(key, value) {
    localStorage.setItem(key, value);
}
