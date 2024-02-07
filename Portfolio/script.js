document.addEventListener('DOMContentLoaded', function () {
    // Event listener for button click
    document.getElementById('generateStars').addEventListener('click', generateStars);

    // Function to generate stars
    function generateStars() {
        // Get the number of stars from the user, with a maximum limit of 100
        let starCount = parseInt(prompt('Enter the number of stars you want to generate (up to 100):'));

        // Validate user input
        if (isNaN(starCount) || starCount <= 0 || starCount > 100) {
            alert('Please enter a valid number between 1 and 100.');
            return;
        }

        // Clear previous stars
        document.getElementById('starContainer').innerHTML = '';

        // Loop to generate stars
        for (let i = 0; i < starCount; i++) {
            // Create a span element for each star
            let starElement = document.createElement('span');
            starElement.classList.add('star');
            starElement.innerHTML = '★';

            // Set random positions for stars
            setRandomPosition(starElement);

            // Append the star to the star container
            document.getElementById('starContainer').appendChild(starElement);
        }
    }

    // Function to set random positions for stars
    function setRandomPosition(starElement) {
        const containerWidth = document.getElementById('starContainer').offsetWidth;
        const containerHeight = document.getElementById('starContainer').offsetHeight;

        const randomX = Math.floor(Math.random() * containerWidth);
        const randomY = Math.floor(Math.random() * containerHeight);

        starElement.style.position = 'absolute';
        starElement.style.left = `${randomX}px`;
        starElement.style.top = `${randomY}px`;
    }
});
