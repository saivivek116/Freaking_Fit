import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://wallpapercave.com/dwp1x/wp10992330.jpg",
    "https://wallpapercave.com/dwp1x/wp12424941.jpg",
    "https://us.123rf.com/450wm/nsit0108/nsit01082304/nsit0108230400405/201455330-strong-man-back-in-the-gym-fitness-workout-generate-ai.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Function to go to the previous slide
  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot${currentIndex === index ? " active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button className="carousel-nav carousel-nav-left" onClick={goToPrev}>
        ‹
      </button>
      <button className="carousel-nav carousel-nav-right" onClick={goToNext}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
