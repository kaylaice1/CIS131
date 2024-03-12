const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const output = document.getElementById('output');

input1.addEventListener('input', updateOutput);
input2.addEventListener('input', updateOutput);

function updateOutput() {
    output.innerHTML = "Text from Input 1: " + input1.value + "<br>" +
                       "Text from Input 2: " + input2.value;
}
