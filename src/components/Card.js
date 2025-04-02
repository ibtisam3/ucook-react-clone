// Import the React library
import React from "react";

// Defining a functional component called SlideCard that takes in props
function SlideCard(props) {
 // Render the component's JSX
 return (
   <div className="card">
     {/* Rendering an image with the src and alt attributes passed in as props */}
     <div className="card-img">
       <img src={props.img} alt={props.alt} />
     </div>

     {/* Render a section with a title, content, and link */}
     <div className="card-info">
       <h3 className="card-title">{props.title}</h3>
       <p>{props.content}</p>
       {/* Render a link with the href and link name passed in as props */}
       <a href={props.link} className="card-link">
         {props.link_name}
       </a>
     </div>
   </div>
 );
}

// Export the SlideCard component as the default export
export default SlideCard;