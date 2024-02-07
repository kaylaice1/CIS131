document.addEventListener('DOMContentLoaded', function () {
    // Event listener for button click
    document.getElementById('generateStars').addEventListener('click', generateStars);

    // Function to generate stars
    function generateStars() {
        // Get the number of stars from the user
        let starCount = parseInt(prompt('Enter the number of stars you want to generate:'));

        // Validate user input
        if (isNaN(starCount) || starCount <= 0) {
            alert('Please enter a valid positive number.');
            return;
        }

        // Clear previous stars
        document.getElementById('starContainer').innerHTML = '';

        // Loop to generate stars
        for (let i = 1; i <= starCount; i++) {
            // Create a span element for each star
            let starElement = document.createElement('span');
            starElement.classList.add('star');
            starElement.innerHTML = '★';

            // Append the star to the star container
            document.getElementById('starContainer').appendChild(starElement);

            // Add a line break after every 50 stars
            if (i % 50 === 0) {
                document.getElementById('starContainer').appendChild(document.createElement('br'));
            }
        }
    }
});
