document.addEventListener('DOMContentLoaded', function () {
    // Get the carousel, prev and next buttons
    var carousel = document.querySelector('#carouselExample');
    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');

    // Function to update button states
    function updateCarouselControls() {
        var activeItem = document.querySelector('.carousel-item.active');
        var allItems = document.querySelectorAll('.carousel-item');
        var firstItem = allItems[0];
        var lastItem = allItems[allItems.length - 1];

        // Disable 'Prev' if it's the first item
        if (activeItem === firstItem) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        // Disable 'Next' if it's the last item
        if (activeItem === lastItem) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }

    // Initialize controls on page load
    updateCarouselControls();

    // Listen for the 'slid' event to update the controls when the carousel slides
    carousel.addEventListener('slid.bs.carousel', updateCarouselControls);
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the carousel, prev and next buttons
    var carousel = document.querySelector('#carouselExample');
    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');

    // Function to update the visibility of carousel buttons
    function updateCarouselControls() {
        var activeItem = document.querySelector('.carousel-item.active');
        var allItems = document.querySelectorAll('.carousel-item');
        var firstItem = allItems[0];
        var lastItem = allItems[allItems.length - 1];

        // Hide 'Prev' button if it's the first item
        if (activeItem === firstItem) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }

        // Hide 'Next' button if it's the last item
        if (activeItem === lastItem) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
    }

    // Initialize controls on page load
    updateCarouselControls();

    // Listen for the 'slid' event to update the controls when the carousel slides
    carousel.addEventListener('slid.bs.carousel', updateCarouselControls);
});
