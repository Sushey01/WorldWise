import React from "react";
import "./HeroSection.css";
import Logo from "../assets/images/worldwise.png";

const HeroSection = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-title">
          <div className="hero-logo">
            <img src={Logo} alt="logo" />
            <div className="hero-nav">
              <a href="#">Pricing</a>
              <a href="#">Product</a>
              <button className="login-button">LOGIN</button>
            </div>
          </div>
          </div>

          <div className="hero-content">
            <h1>
              You travel the world. <br/>WorldWise keeps track of your adventures.
            </h1>

            <h2>
              A world map that tracks your footsteps into every city you can
              think of. Never forget your wonderful experiences, and <br/>show your
              friends how you have wandered the world.
            </h2>

            <button className="tracking-button">START TRACKING NOW</button>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
