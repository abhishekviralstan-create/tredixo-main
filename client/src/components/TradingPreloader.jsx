import React from "react";
import "./TradingPreloader.css";
import logo from "../assests/tab-logo.png"; // yahan apna logo path lagao

const TradingPreloader = () => {
  return (
    <div className="trading-preloader">
      <div className="preloader-logo-box">
        <img src={logo} alt="Tredixo Logo" className="preloader-logo" />
      </div>
    </div>
  );
};

export default TradingPreloader;