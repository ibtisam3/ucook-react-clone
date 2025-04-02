// Importing necessary libraries and components
import React from "react";
import ImageComponent from "./ImageComponent";


// NavBar component to display navigation and branding
function NavBar() {
 return (
   <header>
     {/* Render a nav bar with a hamburger menu icon */}
     <div className="nav-bar">
       <i className="fa-solid fa-bars fa-lg"></i>
     </div>


    
  {/* Displaying the company logo */}
  <div className="logo">
       <ImageComponent
         imagePath={require("../assets/images/logo.png")}
         alt="ucook logo"
       />
     </div>

     {/* {Main navigation links Section} */}
     <nav>
       <div className="nav-container">
         {/* Navigation item for "Meal Kits" */}
         <div className="nav-item">
           <a href="#">Meal Kits</a>
         </div>


         {/* Navigation item for "Frozen Food" */}
         <div className="nav-item">
           <a href="#">Frozen</a>
         </div>


         {/* Navigation item for "Wine" */}
         <div className="nav-item">
           <a href="#">Wine</a>
         </div>


         {/* Navigation item for "Market" */}
         <div className="nav-item">
           <a href="#">Market</a>
         </div>


         {/* Navigation item for "Weekend Boxes" */}
         <div className="nav-item">
           <a href="#">Weekend Boxes</a>
         </div>


         {/* Navigation item for "About Ucook" */}
         <div className="nav-item">
           <a href="#">About Ucook</a>
         </div>


         {/* Navigation item for "Partner with us" */}
         <div className="nav-item">
           <a href="#">Partner with us</a>
         </div>


         {/* Navigation item for "Gift Cards" */}
         <div className="nav-item">
           <a href="#">Gifts</a>
         </div>


         {/* Navigation item for "Deals" */}
         <div className="nav-item nav-item-last">
           <a href="#">Deals</a>
         </div>
       </div>
       
     </nav>


     {/* Buttons for user authentication and shopping cart */}
     <div className="header-buttons">
       <div className="auth-buttons">
         {/* Login and Sign Up buttons */}
         <a href="#" className="btn btn-login">
           Login
         </a>
         <a href="#" className="btn btn-signup">
           Sign Up
         </a>
       </div>
       {/* Shopping cart icon and button */}
       <div className="shopping-cart">
         <i className="fa-solid fa-cart-shopping fa-lg"></i>
         <a href="#" className="btn cart-btn">
           0
         </a>
       </div>
     </div>
   </header>
 );
}


// Export the NavBar component
export default NavBar;


