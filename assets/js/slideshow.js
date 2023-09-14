// Get all slideshow images
var slides = document.querySelectorAll('.mySlides');

// Set initial slide index
var slideIndex = 0;

// Function to show the current slide
function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change image every 5 seconds (adjust as needed)
}

// Initialize the slideshow
showSlides();
