// Step 2: Create a function that takes parameters and returns an object with methods
function createCharacter(Name, HP, ...moves) {
    // Step 3: Private variables
    const hp = HP;
    const name = Name;
    const moveList = moves;

    // Step 3: Return an object with methods
    return {
        getHP: function () {
            return hp;
        },
        getName: function () {
            return name;
        },
        appendMovesToPage: function () {
            // Step 3e: Find the "moves" div and append move names
            const movesDiv = document.getElementById('movesDiv');
            if (movesDiv) {
                for (const move of moveList) {
                    const paragraph = document.createElement('p');
                    paragraph.textContent = move;
                    movesDiv.appendChild(paragraph);
                }
            } else {
                console.error("Element with id 'movesDiv' not found.");
            }
        }
    };
}

// Step 4: Create a new variable and set it equal to the result of the function
const myCharacter = createCharacter("Hero", 100, "Attack", "Defend", "Special Move");

// Step 5: Call the method to append moves to the page
myCharacter.appendMovesToPage();

// Step 6: Log the HP and Name of the character
console.log("HP:", myCharacter.getHP());
console.log("Name:", myCharacter.getName());
