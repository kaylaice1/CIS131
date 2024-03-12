let slideIndex = 0;
let quoteIndex = 0;
let photoTimer; // Timer for the photo slideshow
let quoteTimer; // Timer for the quote slideshow

function showPhotoSlides() {
    let i;
    const slides = document.querySelectorAll(".slideshow-container .mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    photoTimer = setTimeout(showPhotoSlides, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

function showQuoteSlides() {
    let i;
    const slides = document.querySelectorAll(".quote-slideshow-container .quoteSlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    quoteIndex++;

    if (quoteIndex > slides.length) {
        quoteIndex = 1;
    }

    slides[quoteIndex - 1].style.display = "block";
    quoteTimer = setTimeout(showQuoteSlides, 3000); // Change slide every 3 seconds (3000 milliseconds)
}

document.addEventListener("DOMContentLoaded", function() {
    showPhotoSlides(); // Start the photo slideshow when the page loads
    showQuoteSlides(); // Start the quote slideshow when the page loads
});
