const imageContainer = document.querySelector('.image-container');
let scrollInterval;

imageContainer.addEventListener('mouseenter', () => {
  scrollInterval = setInterval(() => {
    imageContainer.scrollLeft += 1.4; // Scroll right
  }, 10); // Adjust speed by changing the interval
});

imageContainer.addEventListener('mouseleave', () => {
  clearInterval(scrollInterval);
});

imageContainer.addEventListener('mousemove', (e) => {
  const containerWidth = imageContainer.offsetWidth;
  const mouseX = e.clientX - imageContainer.getBoundingClientRect().left;

  if (mouseX < containerWidth / 2) {
    // Mouse is on the left half
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      imageContainer.scrollLeft -= 1.4; // Scroll left
    }, 10);
  } else {
    // Mouse is on the right half
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      imageContainer.scrollLeft += 1.4; // Scroll right
    }, 10);
  }
});