import React from "react";
import "./Product.css";
import ProductImage from "../assets/images/productImage.jpg";

const Product = () => {
  return (
    <div className="product-container">
     
        <div className="product-image">
          <img src={ProductImage} alt="product-img" />
        </div>
          <div className="product-content">
        <h1>About WorldWide.</h1>
       
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          natus dolorum! Nesciunt, totam obcaecati. Repudiandae minima eveniet
          necessitatibus autem sequi nesciunt odio?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ipsum
          laudantium beatae, Veniam iusto vero repudiandae dolor qui?
        </p>
      </div>
    </div>
  );
};

export default Product;
 