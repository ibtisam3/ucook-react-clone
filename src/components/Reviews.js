// Import the React library
import React from "react";

// Define an array of reviews
const ucookReviews = [
  {
    name: "Amanda R",
    content:
      "“We just love UCOOK, even my teens have started saying UCOOK is the bomb!”",
  },
  {
    name: "Angelique N",
    content:
      "“Keep doing what you do! The food is delicious and easy to cook. I honestly cannot brag about it enough. Every meal has so much flavour and tastes amazing!”",
  },
  {
    name: "Mignon K",
    content:
      "“Loving that I don't have to plan, buy and prepare a week's meals. There is 0 food wastage. Thank you for helping us with super easy and delicious dinners!”",
  },
];

// Define a functional component called Reviews
function Reviews() {
  return (
    <section className="review-card">
      {/* Map over the ucookReviews array and render a text card for each item */}
      {ucookReviews.map((info, index) => (
        <div className="review-wrap" key={index}>
          {/* Render the name and rating section */}
          <div className="review-name">
            <h6>{info.name}</h6>
            <div className="review-rating">
              {/* Render 5 stars */}
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          {/* Render the text content */}
          <div className="text-card-text">{info.content}</div>
        </div>
      ))}
    </section>
  );
}

// Export the Reviews component as the default export
export default Reviews;
