import React, { useState } from "react"; // Import React and useState hook
import CravingsSlide from "../CravingsSlide"; 
import SlideCard from "./Card"; 


function CravingsSection() {
  // State variable 'activeIndex' keeps track of the current index of the slide being displayed
  const [activeIndex, setActiveIndex] = useState(0);

  // Defining a function that moves to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === CravingsSlide.length - 4 ? 0 : prevIndex + 1
    );
  };

  // Defining a function that moves to the previous slide
  const previousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? CravingsSlide.length - 4 : prevIndex - 1
    );
  };

  return (
    <section className="cravings-section">
      <h4>Whatever you're craving, we've got you covered</h4>

      <div className="cravings-carousels">
        {/* Left arrow button to go to the previous slide */}
        <div className="carousel-control">
          <button onClick={previousSlide}>
            <i className="fa-solid fa-chevron-left fa-xl"></i>
          </button>
        </div>

        {/* Carousel items container */}
        <div className="cravings-carousel">
          {/* Render only 4 slides at a time */}
          {CravingsSlide.slice(activeIndex, activeIndex + 4).map((slide) => {
            return (
              <SlideCard
                key={slide.key}
                img={slide.img}
                title={slide.title}
                content={slide.content}
                link={slide.link}
                link_name={slide.link_name}
              />
            );
          })}
        </div>

        {/* Right arrow button to go to the next slide */}
        <div className="carousel-control">
          <button onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right fa-xl"></i>
          </button>
        </div>
      </div>

      {/* Render tracking lines */}
      <div className="carousel-tracker">
        {/* Only two tracker lines */}
        <span
          className={`tracker-line ${activeIndex === 0 ? "active" : ""}`}
        ></span>
        <span
          className={`tracker-line ${activeIndex === CravingsSlide.length - 4 ? "active" : ""}`}
        ></span>
      </div>
    </section>
  );
}

export default CravingsSection;