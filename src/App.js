import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection.js";

import MenuSection from "./components/MenuSection";
import HeroCarousel from "./components/HeroCarousel";
import UcookSection from "./components/UcookSection";
import CravingsSection from "./components/CravingsSection";
import Reviews from "./components/Reviews";

import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <main>
        <HeroSection />
        <HowItWorksSection />
         <MenuSection />
        <HeroCarousel />
        <UcookSection />
        <CravingsSection />
        <Reviews/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
