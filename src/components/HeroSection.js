import React from "react";

// This component renders the main hero section
function HeroSection() {
  return (
    <section className="hero-container">
      {/* Container for the hero section text */}
      <div className="hero-text">
        {/* Primary heading of the hero section */}
        <h1>Dinner, made easy</h1>
        {/* Promotional offer message */}
        <p>Get 30% off your first Meal Kit order with code #WELCOME30</p>
       <div>
          <a
            className="btn hero-btn"
          >
            Lets Get Started
          </a>
        </div>
      </div>

      {/* Image container for the hero section */}
                {/* Displaying hero image */}
          <img className="hero-img" src="https://images.ucook.co.za/images/height=480%7Cencoding=webp/384bfa19/384bfa19-078d-4727-a687-a909742d638b.webp"/>   
    </section>
  );
}

export default HeroSection;
