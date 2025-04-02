// Import React and the CarouselMenu component for the menu carousel
import React from "react";
import CarouselMenu from "./CarouselMenu";

// Creating the MenuSection functional component
function MenuSection() {
  // Return JSX to render the menu section on the page
  return (
   <section className="menu-section">
     {/*Heading for the menu section*/}
     <h3>On the menu this week</h3>

     {/* Render the CarouselMenu component */}
     <CarouselMenu/>
   </section>
 );
}

// Exporting MenuSection to make it available to use in other parts of the app
export default MenuSection;