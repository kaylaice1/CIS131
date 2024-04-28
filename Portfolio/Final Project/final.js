// Sample SCP entries data
const scpEntries = [
    { id: 173, name: "The Sculpture", description: "Concrete sculpture that moves when not observed." },
    { id: 682, name: "Hard-to-Destroy Reptile", description: "An extremely hostile, resilient reptilian creature." },
    { id: 914, name: "The Clockworks", description: "A machine that refines objects into different forms." },
    { id: 96, name: "The Shy Guy", description: "A humanoid entity that becomes violent when seen by humans." },
    { id: 49, name: "The Plague Doctor", description: "A humanoid figure with medieval plague doctor attire." },
    { id: 3008, name: "An Infinite IKEA", description: "A seemingly endless IKEA store with anomalous properties." },
    { id: 999, name: "The Tickle Monster", description: "A friendly, gelatinous creature that enjoys tickling personnel." },
    { id: 106, name: "The Old Man", description: "A humanoid entity capable of phasing through solid matter and corroding materials." },
    { id: 35, name: "Possessive Mask", description: "A mask that can control the actions of those who wear it." },
    { id: 343, name: "God", description: "An entity claiming to be all-knowing and all-powerful." }
];

// Function to create SCP entry elements
function createSCPEntry(number, description, url) {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('scp-entry');

    const title = document.createElement('h2');
    const titleLink = document.createElement('a');
    titleLink.textContent = `${name} (SCP-${number})`;
    titleLink.href = url;
    title.appendChild(titleLink);

    const desc = document.createElement('p');
    desc.textContent = description;

    entryDiv.appendChild(title);
    entryDiv.appendChild(desc);

    return entryDiv;
}

// Function to display SCP entries on the page
const displaySCPEntries = (entries) => {
    const scpEntriesContainer = document.getElementById("scpEntries");
    scpEntriesContainer.innerHTML = ''; // Clear previous entries
    entries.forEach(entry => {
        const entryElement = createSCPEntry(entry.id, entry.name, `scp${entry.id}.html`);
        scpEntriesContainer.appendChild(entryElement);
    });
};

// Call the displaySCPEntries function to initially populate the page
displaySCPEntries(scpEntries);

// Function to filter SCP entries based on user input
const filterSCPEntries = searchTerm => {
    const filteredEntries = scpEntries.filter(entry =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase()) || entry.id.toString().includes(searchTerm)
    );
    displaySCPEntries(filteredEntries);
};

// Event listener for input field to filter SCP entries
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", event => {
    filterSCPEntries(event.target.value);
});
