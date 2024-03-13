document.addEventListener('DOMContentLoaded', function() {
    loadAndDisplayData('input1', 'output1');
    loadAndDisplayData('input2', 'output2');
    
    document.getElementById('deleteAllBtn').addEventListener('click', function() {
        deleteAllData('output1');
        deleteAllData('output2');
    });

    document.getElementById('saveAllBtn').addEventListener('click', function() {
        saveAllData();
    });
});

function loadAndDisplayData(inputId, outputId) {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);
    
    input.value = localStorage.getItem(inputId) || '';
    output.innerHTML = localStorage.getItem(outputId) || '';
    output.classList.add('wrap-lines');

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const newData = input.value.trim();
            if (newData !== '') {
                const currentData = output.innerHTML;
                const newWord = document.createElement('span');
                newWord.innerHTML = `<input type="checkbox">${newData}`;
                output.appendChild(newWord);
                output.appendChild(document.createElement('br'));
                saveData(outputId, output.innerHTML);
                input.value = '';
            }
        }
    });
}

document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', function() {
        const outputId = this.dataset.output;
        const output = document.getElementById(outputId);
        const input = output.previousElementSibling.querySelector('input');
        const wordToDelete = input.value.trim();
        const newData = output.textContent.split('\n').filter(word => word !== wordToDelete).join('\n');
        output.textContent = newData;
        input.value = '';
    });
});

function deleteAllData(outputId) {
    const output = document.getElementById(outputId);
    output.textContent = '';
    saveData(outputId, '');
}

function saveData(key, value) {
    localStorage.setItem(key, value);
}

function saveAllData() {
    saveData('output1', document.getElementById('output1').textContent);
    saveData('output2', document.getElementById('output2').textContent);
}
