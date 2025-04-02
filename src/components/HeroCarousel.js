// Import the necessary dependencies
import React, { useState } from "react";
import HeroSlides from "../HeroSlides";

// Defining a functional component called HeroCarousel
function HeroCarousel() {
  // Declare a state variable 'activeSlide' and its updater function 'setActiveSlide'
  const [activeSlide, setActiveSlide] = useState(0);

  // Defining a function that moves to the next slide
  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === HeroSlides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Defining a function that moves to the previous slide
  const previousSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? HeroSlides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="hero-carousel">
      {/* Left carousel control button to move to the previous slide */}
      <div className="carousel-control control-position-l">
        <button onClick={previousSlide}>
          <i className="fa-solid fa-chevron-left fa-xl"></i>
        </button>
      </div>

      {/* Render the hero carousel slides */}
      <div className="hero-carousel-slides">
        <div
          key={activeSlide}
          className="hero-carousel-slide"
          id={HeroSlides[activeSlide].id}
        >
          {/* Render the slide information (title, content, and button) */}
          <div className="h-carousel-info">
            <h1>{HeroSlides[activeSlide].title}</h1>
            <p>{HeroSlides[activeSlide].content}</p>
            <a
              href={HeroSlides[activeSlide].link}
              className={HeroSlides[activeSlide].classname}
            >
              {HeroSlides[activeSlide].btn}
            </a>
          </div>

          {/* Render the slide image */}
          <div className="h-carousel-img">
            <img
              src={HeroSlides[activeSlide].img}
              alt={HeroSlides[activeSlide].alt}
            />
          </div>
        </div>
      </div>

      {/* Right carousel control button to move to the next slide */}
      <div className="carousel-control control-position-r">
        <button onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right fa-xl"></i>
        </button>
      </div>
    </section>
  );
}

export default HeroCarousel;