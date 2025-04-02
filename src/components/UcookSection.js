import React from "react";
import whyUcook from "../whyUcook"; // Importing the whyUcook data array
function UcookSection() {
  return (
    <section className="ucook-section">
      <h3>Why UCOOK</h3>
      <div className="ucook-features">
        {whyUcook.map((item, index) => {
          return (
            <div key={index} className="feature">
              <div className="why-ucook-img">
                <img src={item.img} alt={item.alt} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
      <div className="get-started-now">Get Started Now</div>
    </section>
  );
}

export default UcookSection;
