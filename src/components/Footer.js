// Import the React library
import React from "react";


// Footer component containing various sections like product links, company info, support, and social media
function Footer() {
  // Return JSX structure for the footer
  return (
    <footer>
      {/* Main content section of the footer */}
      <div className="footer-wrap">
        {/* Section containing links to different product categories */}
        <div>
          <h6>PRODUCT</h6>
          <a href="#">MEAL KITS</a>
          <a href="#">FROZEN</a>
          <a href="#">WINE</a>
          <a href="#">MARKET</a>
        </div>
        {/* Section containing links to company-related pages */}
        <div>
          <h6>COMPANY</h6>
          <a href="#">ABOUT</a>
          <a href="#">CAREERS</a>
          <a href="#">RECYCLE</a>
        </div>
        {/* Section providing support links and contact details */}
        <div>
          <h6>SUPPORT</h6>
          <a href="#">FAQ'S</a>
          <a href="#">CONTACT</a>
          <a href="#">
            <i className="fa-solid fa-phone fa-lg"></i>
            <span>021 447 4424</span>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp fa-xl"></i>
            <span>072 020 1555</span>
          </a>
        </div>
        {/* Section containing links to download the mobile app and social media platforms */}
        <div className="footer-apps">
          <div className="download-app">
            <a href="#" className="app-store">
              <img src={require("../assets/images/app-store.webp")} />
            </a>
            <a href="#" className="google-play">
              <img src={require("../assets/images/google-play.webp")} />
            </a>
          </div>
          <div className="social-apps">
            <a href="#">
              <i className="fa-brands fa-facebook fa-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter fa-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube fa-2xl"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-tiktok fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Section containing legal information and policies */}
      <div className="terms-condition">
  <div className="copyright-notice">
    <p>
      2025 © UCOOK. All rights reserved by The Supper Society Proprietary
      Limited | Liquor License: WCP/042073 | GAU/10615
    </p>
    <a href="https://www.ucook.co.za/" target="_blank" rel="noreferrer">
            UCOOKS original website!
          </a>
  </div>
  <div className="copyright">
    <div>
      <a href="#">Terms & Conditions</a>
    </div>
    <div>
      <a href="#">Privacy Policy</a>
    </div>
    <div>
      <a href="#">Referral Terms</a>
    </div>
  </div>
</div>
</footer>
  );
}

// Export the Footer component as the default export
export default Footer;
