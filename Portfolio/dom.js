var containerDiv = document.getElementById('container');

for (var i = 1; i <= 5; i++) {
    var newParagraph = document.createElement('p');
    newParagraph.textContent = 'Paragraph ' + i;

    containerDiv.appendChild(newParagraph);
}

function changeColors() {
    document.body.style.backgroundColor = '#003366';
    containerDiv.style.backgroundColor = '#99cc00'; 
    containerDiv.style.color = '#fff';
}

var button = document.createElement('button');
button.textContent = 'Change Colors';
button.onclick = changeColors;

containerDiv.appendChild(button);