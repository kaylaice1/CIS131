// Function to create a character object with closures
function createCharacter(Name, HP, ...moves) {
    // Private variables
    const hp = HP;
    const name = Name;
    const moveList = moves;

    // Return an object with methods
    return {
        getHP: function () {
            return hp;
        },
        getName: function () {
            return name;
        },
        appendMovesToPage: function () {
            const movesDiv = document.getElementById('movesDiv');
            for (const move of moveList) {
                const paragraph = document.createElement('p');
                paragraph.textContent = move;
                movesDiv.appendChild(paragraph);
            }
        }
    };
}

// Create a new character object
const myCharacter = createCharacter("Hero", 100, "Attack", "Defend", "Special Move");

// Call the method to append moves to the page
myCharacter.appendMovesToPage();

// Log the HP and Name of the character
console.log("HP:", myCharacter.getHP());
console.log("Name:", myCharacter.getName());
