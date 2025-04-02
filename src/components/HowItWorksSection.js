// Importing React to build the component
import React from "react";

// Defining an array containing details for each step
const howDetails = [
  {
    key: 1,
    title: "1. You choose",
    content:
      "Sign up, pick from 28 new dinner recipes every week and explore our range of lunch, wine, market, and frozen craft meals. Orders close 9am Wed - pause at any time!",
    img: require("../assets/images/how-images/choose.png"),
    alt: "You choose",
  },
  {
    key: 2,
    title: "2. We deliver",
    content:
      "Get a weekly delivery of top quality, perfectly-portioned fresh produce, shipped in an insulated cold box, straight to your door.",
    img: require("../assets/images/how-images/deliver.png"),
    alt: "We deliver",
  },
  {
    key: 3,
    title: "3. You cook",
    content:
      "Get simple-to-follow recipes and create restaurant quality dishes in your own home with no more meal planning or food waste.",
    img: require("../assets/images/how-images/cook.png"),
    alt: "You cook",
  },
];

// Defining the HowItWorksSection functional component
function HowItWorksSection() {
  return (
    // Container for the entire how it works section
    <section className="how-it-works-section">
      {/* Section heading */}
      <h3>How does it work?</h3>

      {/* Wrapper for displaying how details */}
      <div className="how-wrap">
        {/* Looping through the howDetails and render each step */}
        {howDetails.map((detail) => {
          return (
            <div key={detail.key} className="how">
              {/* Step image */}
              <div className="how-img">
                <img src={detail.img} alt={detail.alt} />
              </div>
              {/* Step title */}
              <h4>{detail.title}</h4>
              {/* Step description */}
              <p>{detail.content}</p>
            </div>
          );
        })}
      </div>

      {/* Link to FAQ for additional questions */}
      <p className="faq">
        Got more questions? - Check out our{" "}
        <a href="https://www.ucook.co.za/meal-kit/plans#plans-faq">FAQ'S</a>
      </p>
    </section>
  );
}

// Export HowItWorksSection to be used in other parts of the application
export default HowItWorksSection;
