// Importing the necessary dependencies
import React, { useState } from "react";
import slides from "../MenuSlide";

// Defining a functional component called MenuCarousel
const CarouselMenu = () => {
 // Declare a state variable 'activeSlide' and its updater function 'setActiveSlide'
 const [activeSlide, setActiveSlide] = useState(0);

  // Defining a function that moves to the next slide
  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Defining a function that moves to the previous slide
  const PreviousSlide = () => {
   setActiveSlide((prevSlide) =>
     prevSlide === 0 ? slides.length - 1 : prevSlide - 1
   );
 };

 

  // Returning the JSX structure for the carousel component
  return (
   <div className="carousel-container">
      {/* Left carousel control button to move to the previous slide */}
      <div className="carousel-control">
       <button onClick={PreviousSlide}>
         <i className="fa-solid fa-chevron-left fa-xl"></i>
       </button>
     </div>

     {/* carousel content section */}
     <div className="carousel-image-wrap">
       {/* displaying carousel header with slide titles */}
       <div className="carousel-header">
         {slides.map((slide, index) => (
           <div
             key={index}
             className={`carousels-title ${
               index === activeSlide ? "active" : ""
             }`}
           >
             {slide.title}
           </div>
         ))}
       </div>

      {/* Displaying the images and captions for the active slide */}
        <div className="carousel-slides">
         {slides[activeSlide].images.map((image, index) => (
           <div key={index} className="carousel-slide">
             <img src={image.src} alt={image.caption} />
             <p>{image.caption}</p>
           </div>
         ))}
       </div>
     </div>

      {/* Right carousel control button to move to the next slide */}
      <div className="carousel-control">
       <button onClick={nextSlide}>
         <i className="fa-solid fa-chevron-right fa-xl"></i>
       </button>
     </div>
   </div>
 );
};

// Export the CarouselMenu component
export default CarouselMenu;









