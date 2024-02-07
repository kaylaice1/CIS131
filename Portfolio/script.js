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

        // Calculate the maximum number of rows and stars per row
        const maxStarsPerRow = 20;
        const maxRows = Math.ceil(starCount / maxStarsPerRow);

        // Loop to generate stars
        for (let row = 0; row < maxRows; row++) {
            for (let col = 0; col < maxStarsPerRow && (row * maxStarsPerRow + col) < starCount; col++) {
                // Create a span element for each star
                let starElement = document.createElement('span');
                starElement.classList.add('star');
                starElement.innerHTML = '★';

                // Set random positions for stars within the container
                setRandomPosition(starElement);

                // Append the star to the star container
                document.getElementById('starContainer').appendChild(starElement);
            }
        }
    }

    // Function to set random positions for stars within the container
    function setRandomPosition(starElement) {
        const containerWidth = document.getElementById('starContainer').offsetWidth;
        const containerHeight = document.getElementById('starContainer').offsetHeight;

        const starSize = 24; // Assuming a fixed size for the stars

        // Calculate the maximum position to avoid overlapping
        const maxX = containerWidth - starSize;
        const maxY = containerHeight - starSize;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        starElement.style.position = 'absolute';
        starElement.style.left = `${randomX}px`;
        starElement.style.top = `${randomY}px`;
    }
});
