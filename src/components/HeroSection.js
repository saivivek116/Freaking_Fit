import React from "react";
import Carousel from "./Carousel";
function HeroSection() {
  return (
    <div className="hero-container">
      <Carousel />
      <div className="hero-content">
        <h1>
          <b>GO BEYOND</b>
        </h1>
        <p>
          <b>What are you waiting for?</b>
        </p>
        <p>
          <b>GET STARTED!</b>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
