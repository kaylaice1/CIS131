const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

input1.addEventListener('input', updateOutput.bind(null, input1, output1));
input2.addEventListener('input', updateOutput.bind(null, input2, output2));

function updateOutput(input, output) {
    output.textContent = input.value;
}
