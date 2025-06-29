import React from "react";
import "./Pricing.css";
import PricingImage from "../assets/images/pricingImage.jpg";
import Navbar from "./Navbar";

const Pricing = () => {
  return (
    <section className="section3">
      <div className="pricing-main">
        <Navbar/>
        <div className="pricing-container">
      <div className="pricing-content">
        <h1>Simple pricing. <br/>Just $9/month.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          natus dolorum! Nesciunt, totam obcaecati. Repudiandae minima eveniet
          necessitatibus autem sequi nesciunt odio?
        </p>
      </div>
      <div className="pricing-image">
        <img src={PricingImage} alt="pricing-img"/>
      </div>
    </div>
      </div>
    </section>
    
  );
};

export default Pricing;
