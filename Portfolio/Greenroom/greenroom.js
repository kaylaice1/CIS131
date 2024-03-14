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
    const savedContent = localStorage.getItem(outputId);
    if (savedContent) {
        output.innerHTML = savedContent;
    } else {
        output.innerHTML = '';
    }
    output.classList.add('wrap-lines');

    // Restore checkboxes
    output.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const newData = input.value.trim();
            if (newData !== '') {
                const newWord = document.createElement('span');
                newWord.innerHTML = `<input type="checkbox">${newData}`;
                output.appendChild(newWord);
                output.appendChild(document.createElement('br'));
                saveData(outputId, output.innerHTML);
                adjustContainerHeight(output);
                input.value = '';
            }
        }
    });
}

document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', function() {
        const outputId = this.dataset.output;
        const output = document.getElementById(outputId);
        const checkboxes = output.querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const word = checkbox.parentNode;
                const lineBreak = word.nextSibling;
                
                if (output.contains(word)) {
                    output.removeChild(word);
                }
                if (output.contains(checkbox)) {
                    output.removeChild(checkbox);
                }
                if (output.contains(lineBreak)) {
                    output.removeChild(lineBreak);
                }
            }
        });

        saveData(outputId, output.innerHTML);
        adjustContainerHeight(output);
        rearrangeWords(output);
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
    saveData('output1', document.getElementById('output1').innerHTML);
    saveData('output2', document.getElementById('output2').innerHTML);
}

function adjustContainerHeight(output) {
    const lineHeight = parseFloat(window.getComputedStyle(output.querySelector('span')).lineHeight);
    const numLines = output.querySelectorAll('span').length;
    const newHeight = lineHeight * numLines;
    output.parentElement.style.height = newHeight + 'px';
}

function rearrangeWords(output) {
    const words = output.querySelectorAll('span');
    const checkedWords = [];
    words.forEach((word, index) => {
        const lineBreak = word.nextSibling;
        if (lineBreak) {
            const checkbox = word.querySelector('input[type="checkbox"]');
            if (checkbox && checkbox.checked) {
                checkedWords.push(word);
            }
        }
    });
    checkedWords.forEach(word => {
        if (word.previousElementSibling && word.previousElementSibling.tagName === 'BR') {
            output.removeChild(word.previousElementSibling);
        }
        output.removeChild(word);
    });
    saveData(output.id, output.innerHTML);
    adjustContainerHeight(output);
}
