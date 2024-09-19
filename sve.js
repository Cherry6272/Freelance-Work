const imageContainer = document.querySelector('.image-container');
let scrollAmount = 0;
const scrollInterval = 3000; // 2 seconds
const imageWidth = 100; // Width of each image in pixels

function scrollImages() {
  scrollAmount += imageWidth + 10; // Adjust this to match the gap set in CSS
  imageContainer.style.transform = `translateX(-${scrollAmount}px)`;

  // Reset scroll if it exceeds the container's width
  if (scrollAmount >= imageContainer.scrollWidth) {
    scrollAmount = 0;
  }
}

// Auto-scroll every 2 seconds
setInterval(scrollImages, scrollInterval);
