window.onload = () => {
  const carouselWrapper = document.querySelector("#carouselWrapper");
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % 5;
    updateCarousel();
  }

  function updateCarousel() {
    const translateValue = -currentIndex * 900;
    carouselWrapper.style.transform = `translateX(${translateValue}px)`;
  }

  // Automatically change the slide every 3 seconds (adjust as needed)
  setInterval(showNextSlide, 5000);

  // Optionally, you can add navigation buttons or indicators for manual control
};
