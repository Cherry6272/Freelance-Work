// JavaScript for automatic scrolling
document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.clients-scroll');
    let scrollAmount = 0;

    function scrollImages() {
        scrollAmount -= 1; // Adjust scroll speed here (negative value to scroll left)
        if (Math.abs(scrollAmount) >= scrollContainer.scrollWidth / 2) {
            scrollAmount = 0; // Reset scroll position once halfway through
        }
        scrollContainer.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scrollImages);
    }

    // Clone images to create a continuous scrolling effect
    const images = Array.from(scrollContainer.children);
    images.forEach(image => {
        const clone = image.cloneNode(true);
        scrollContainer.appendChild(clone);
    });

    // Start the scrolling
    scrollImages();
});
