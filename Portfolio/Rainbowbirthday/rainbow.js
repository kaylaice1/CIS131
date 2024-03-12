// Quote Slideshow
let quoteIndex = 0;
let quoteTimer; // Timer for the quote slideshow

function showQuoteSlides() {
    const quoteSlides = document.querySelectorAll(".quote-slideshow-container .mySlides");

    if (quoteSlides.length === 0) {
        return; // No slides found, exit function
    }

    for (let i = 0; i < quoteSlides.length; i++) {
        quoteSlides[i].style.display = "none";
    }

    quoteIndex++;

    if (quoteIndex > quoteSlides.length) {
        quoteIndex = 1;
    }

    quoteSlides[quoteIndex - 1].style.display = "block";
    quoteTimer = setTimeout(showQuoteSlides, 10000); 
}

// Photo Slideshow
let photoIndex = 0;
let photoTimer; // Timer for the photo slideshow

function showPhotoSlides() {
    const photoSlides = document.querySelectorAll(".photo-slideshow-container .mySlides");

    if (photoSlides.length === 0) {
        return; // No slides found, exit function
    }

    for (let i = 0; i < photoSlides.length; i++) {
        photoSlides[i].style.display = "none";
    }

    photoIndex++;

    if (photoIndex > photoSlides.length) {
        photoIndex = 1;
    }

    photoSlides[photoIndex - 1].style.display = "block";
    photoTimer = setTimeout(showPhotoSlides, 3000); // Change photo slide every 3 seconds (3000 milliseconds)
}

// Start both slideshows when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showQuoteSlides();
    showPhotoSlides();
});
