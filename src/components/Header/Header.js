import React from "react";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="navigation-container">
        <div className="advisage-container">
          <p className="advisage-content">adVISAge</p>
        </div>

        <div className="talent-navigation-container">
          <p className="hire-talent">Hire talents</p>
          <p className="become-advisor">Become an advisor</p>
          <p className="find-advisor">Find an advisor</p>

          <div className="get-btn-container">
            <button className="get-started">Get Started</button>
          </div>
        </div>
      </div>

      <div className="advisage-special-container">
        <p className="advisage-special-text">
          Your adVISAge special merchandise is here. Dig in and get yours!
        </p>
      </div>
    </div>
  );
};

export default Header;
